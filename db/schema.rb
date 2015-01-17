# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150116023339) do

  create_table "internals", force: :cascade do |t|
    t.string   "name"
    t.string   "prop"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "userinputs", force: :cascade do |t|
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "bootuptim"
    t.string   "ir"
    t.string   "extir"
    t.string   "npir"
    t.string   "ndi"
    t.string   "nvi"
    t.integer  "vivocamera_id"
  end

  create_table "vivocameras", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
