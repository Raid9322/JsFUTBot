const schema = require("../schemas/currencySchema");
const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("mf_cards1-20")
    .setDescription("Shows the cards of a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Select a user to view their cards")
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    let user = interaction.options.getUser("user");

    if (!user) {
      user = interaction.user;
    }

    let data;
    try {
      data = await schema.findOne({
        userId: user.id,
      });

      if (!data) {
        data = await schema.create({
          userId: user.id,
          guildId: interaction.guild.id,
        });
      }
    } catch (err) {
      await interaction.reply({
        content: "There was an error while executing this command...",
        ephemeral: true,
      });
    }


    const balanceEmbed = new discord.EmbedBuilder()
      .setColor("#000000")
      .setThumbnail(user.displayAvatarURL())
      .setTitle(`__${user.username}\'s cards 1-20__`)
      .setDescription(
        ` 98 pelé : **${data.ppele.toLocaleString()}**x\n 96 ronaldo : **${data.pronaldo.toLocaleString()}**x\n 96 zidane : **${data.pzidane.toLocaleString()}**x\n 96 pelé : **${data.mopele.toLocaleString()}**x\n 95 pelé : **${data.pzidane.toLocaleString()}**x\n 95 ronaldo : **${data.moronaldo.toLocaleString()}**x\n 95 zidane : **${data.mozidane.toLocaleString()}**x\n 94 puskas : **${data.ppuskas.toLocaleString()}**x\n 94 cruyff : **${data.pcruyff.toLocaleString()}**x\n 94 yashin : **${data.pyashin.toLocaleString()}**x\n 94 garrincha : **${data.pgarrincha.toLocaleString()}**x\n 94 maldini : **${data.pmaldini.toLocaleString()}**x\n 94 ronaldinho : **${data.pronaldinho.toLocaleString()}**x\n 94 ronaldo : **${data.mironaldo.toLocaleString()}**x\n 94 zidane : **${data.mizidane.toLocaleString()}**x\n 94 müller : **${data.pmuller.toLocaleString()}**x\n 94 messi ucl : **${data.messi94rw.toLocaleString()}**x\n 94 messi tott : **${data.messi94cf.toLocaleString()}**x\n 93 carlos alberto : **${data.alberto93.toLocaleString()}**x\n`)
      .setTimestamp();

    await interaction.reply({
      embeds: [balanceEmbed],
    });
  },
};
