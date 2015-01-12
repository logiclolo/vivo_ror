class Userinput < ActiveRecord::Base
  belongs_to :vivocamera
  validates :vivocamera_id, presence: true
  validates :property, presence: true
  delegate :name, :to => :vivocamera,  :allow_nil => true
end
