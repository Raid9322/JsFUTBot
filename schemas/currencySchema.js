const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },

  wallet: {
    type: Number,
    default: 0,
    required: true,
  },

  bank: {
    type: Number,
    default: 0,
    required: true,
  },
    ppele: {
    type: Number,
    default: 0,
    required: true,
  },

  pronaldo: {
    type: Number,
    default: 0,
    required: true,
  },

  pzidane: {
    type: Number,
    default: 0,
    required: true,
  },

  mopele: {
    type: Number,
    default: 0,
    required: true,
  },

  mipele: {
    type: Number,
    default: 0,
    required: true,
  },

  moronaldo: {
    type: Number,
    default: 0,
    required: true,
  },

  mozidane: {
    type: Number,
    default: 0,
    required: true,
  },

  ppuskas: {
    type: Number,
    default: 0,
    required: true,
  },

  pcruyff: {
    type: Number,
    default: 0,
    required: true,
  },

  pyashin: {
    type: Number,
    default: 0,
    required: true,
  },

  pgarrincha: {
    type: Number,
    default: 0,
    required: true,
  },

  pmaldini: {
    type: Number,
    default: 0,
    required: true,
  },

  pronaldinho: {
    type: Number,
    default: 0,
    required: true,
  },

  mironaldo: {
    type: Number,
    default: 0,
    required: true,
  },

  mizidane: {
    type: Number,
    default: 0,
    required: true,
  },

  pmuller: {
    type: Number,
    default: 0,
    required: true,
  },

  messi94rw: {
    type: Number,
    default: 0,
    required: true,
  },

  messi94cf: {
    type: Number,
    default: 0,
    required: true,
  },

  mbappe94: {
    type: Number,
    default: 0,
    required: true,
  },
  
  link: {
    type: Number,
    default: 9999999990,
  },

  alberto93: {
    type: Number,
    default: 0,
    required: true,
  },
  pack: {
    type: Number,
    default: 0,
    required: true,
  },

  begTimeout: {
    type: Number,
  },

  workTimeout: {
    type: Number,
  },

  searchTimeout: {
    type: Number,
  },

  huntTimeout: {
    type: Number,
  },
  
  totyTimeout: {
    type: Number,
  },

  fishTimeout: {
    type: Number,
  },

  digTimeout: {
    type: Number,
  },

  chopwoodTimeout: {
    type: Number,
  },

  postmemeTimeout: {
    type: Number,
  },

  dailyTimeout: {
    type: Number,
  },
  
  daily2Timeout: {
    type: Number,
  },

  weeklyTimeout: {
    type: Number,
  },
  
  presentTimeout: {
    type: Number,
  },
  
  weekly2Timeout: {
    type: Number,
  },
  
  weekly3Timeout: {
    type: Number,
  },

  level1Timeout: {
    type: Number,
  },
  
  level15Timeout: {
    type: Number,
  },
  
  level30Timeout: {
    type: Number,
  },
  
  level5Timeout: {
    type: Number,
  },

  monthlyTimeout: {
    type: Number,
  },

  yearlyTimeout: {
    type: Number,
  },

  dicerollTimeout: {
    type: Number,
  },

  rpsTimeout: {
    type: Number,
  },

  donatedTimeout: {
    type: Number,
  },
});

module.exports = mongoose.model("currencySchema", schema);
