from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship, validates

from sqlalchemy.sql import func

from db.database import Base

"""
WIP: i have no idea which models/datafield i am gonna need -> probably lots of migrations in the future lol
"""


class User(Base):
    __tablename__ = "users"

    # identifiers
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    # probably useful for marketing stuff (server-side)
    activation_date = Column(DateTime(timezone=True), server_default=func.now())
    last_online_date = Column(DateTime(timezone=True), server_default=func.now())
    
    is_active = Column(Boolean, default=True)

    # UX
    chat_history = relationship("ChatItem", back_populates="owner")

    # payment
    payment_plan = Column(String)

    @validates("payment_plan")
    def check_plan_is_valid(self, key, payment_plan):
        if payment_plan not in ["base", "pro"]: raise ValueError("Payment plan does not exist")
        return payment_plan

    
    @validates("email", include_backrefs=False)
    def validate_address(self, key, email):
        if "@" not in email:
            raise ValueError("failed simplified email validation")
        return address


class Source(Base):
    __tablename__ = "sources"

    id = Column(Integer, primary_key=True)
    name = Column(String, index=True)
    url = Column(String)
    extension = Column(String)
    content = Column(String)


class ChatItem(Base):
    __tablename__ = "chat_items"

    # general purpose data
    id = Column(Integer, primary_key=True)
    title = Column(String, index=True)
    creation_date = Column(DateTime(timezone=True), server_default=func.now())

    # chat data
    user_prompt = Column(String)
    model_response = Column(String)
    sources = relationship("Source", back_populates="ChatItem")

    # join to user
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="items")