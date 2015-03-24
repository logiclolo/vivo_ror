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

ActiveRecord::Schema.define(version: 20150319150051) do

  create_table "internals", force: :cascade do |t|
    t.string   "name"
    t.string   "prop"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "userinputs", force: :cascade do |t|
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.integer  "vivocamera_id"
    t.string   "api_httpversion"
    t.integer  "bootuptime"
    t.integer  "npir"
    t.integer  "ndi"
    t.integer  "nvi"
    t.integer  "ndo"
    t.integer  "naudioin"
    t.integer  "naudioout"
    t.integer  "nvideoin"
    t.integer  "nvideoout"
    t.integer  "nmediastream"
    t.integer  "nuart"
    t.integer  "nvideoinprofile"
    t.integer  "nmotion"
    t.integer  "nmotionprofile"
    t.integer  "ptzenabled"
    t.integer  "windowless"
    t.integer  "evctrlchannel"
    t.integer  "joystick"
    t.integer  "npreset"
    t.integer  "eptz"
    t.integer  "nanystream"
    t.integer  "iva"
    t.integer  "whitelight"
    t.integer  "iris"
    t.integer  "tampering"
    t.integer  "adaptiverecording"
    t.integer  "adaptivestreaming"
    t.integer  "supportsd"
    t.integer  "fisheye"
    t.string   "supporttriggertypes"
    t.integer  "daynight_support"
    t.integer  "daynight_builtinir"
    t.integer  "daynight_externalir"
    t.integer  "daynight_smartir"
    t.integer  "daynight_ircutfilter"
    t.integer  "daynight_lightsensor"
    t.string   "sensortype"
    t.string   "iristype"
    t.integer  "dnr"
    t.integer  "flickerless"
    t.integer  "eis"
    t.integer  "aespeed"
    t.integer  "defog"
    t.integer  "scenemode"
    t.integer  "wdrpro"
    t.integer  "wdrc"
    t.integer  "remotefocus"
    t.integer  "backfocus"
    t.integer  "focusassist"
  end

  create_table "userinputsdfs", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vivocameras", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
