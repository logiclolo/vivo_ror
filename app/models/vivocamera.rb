class Vivocamera < ActiveRecord::Base
  has_many :userinputs, dependent: :destroy
  validates :name, presence: true
end
