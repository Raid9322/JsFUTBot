const schema = require("../schemas/currencySchema");
const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_create")
    .setDescription("create your own pack")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("add a name to the pack")
        .setRequired(true)
    )
  .addStringOption((option) =>
      option
        .setName("min")
        .setDescription("min rating")
        .setRequired(true)
    )
  .addStringOption((option) =>
      option
        .setName("max")
        .setDescription("max rating")
        .setRequired(true)
    )
  .addStringOption((option) =>
      option
        .setName("nation")
        .setDescription("choose the nation")
    )
  .addStringOption((option) =>
      option
        .setName("club")
        .setDescription("choose the club")
    )
   .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("choose the type")
                    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let min = interaction.options.getString("min");
    let name = interaction.options.getString("name");
    let max = interaction.options.getString("min");
    let nation = interaction.options.getString("nation");
    let club = interaction.options.getString("club");
    let type = interaction.options.getString("type");
    let canvas = `**you created a pack with the details\nname : ${name}\nrating : ${min}-${max}\n\n-----optional-----\nnation : ${nation}\nclub : ${club}\ntype : ${type}\n\nplease make a ticket to claim your pack , thank you**`;
     
      await interaction.reply({
        content: canvas,
         });
  },
};

