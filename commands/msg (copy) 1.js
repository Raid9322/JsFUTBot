const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");


module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_test")
    .setDescription("link urself")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("Enter your username")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let comment = interaction.options.getString("username");
    let avatarUrl = interaction.user.avatarURL({ extension: "jpg" });
    let canvas = `https://tenor.com/view/so-excited-baby-cute-adorable-bath-gif-15061321`;

   await interaction.reply({
        content: canvas,
         });
  },
};

