/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Comments').del()
  await knex('Comments').insert([
    { UserName: 'Usuário 1', PostId: 1, Comment: 'Dolor sit amet consectetur adipiscing elit ut aliquam purus. Porttitor rhoncus dolor purus non. Mauris augue neque gravida in. Neque gravida in fermentum et sollicitudin.' },
    { UserName: 'Usuário 2', PostId: 1, Comment: 'Dolor sit amet consectetur adipiscing elit ut aliquam purus. Porttitor rhoncus dolor purus non. Mauris augue neque gravida in. Neque gravida in fermentum et sollicitudin.' },
    { UserName: 'Usuário 3', PostId: 1, Comment: 'Dolor sit amet consectetur adipiscing elit ut aliquam purus. Porttitor rhoncus dolor purus non. Mauris augue neque gravida in. Neque gravida in fermentum et sollicitudin.' },
    { UserName: 'Usuário 4', PostId: 2, Comment: 'Tempus imperdiet nulla malesuada pellentesque elit eget. Aliquam sem et tortor consequat. Eu lobortis elementum nibh tellus' },
    { UserName: 'Usuário 5', PostId: 2, Comment: 'Tempus imperdiet nulla malesuada pellentesque elit eget. Aliquam sem et tortor consequat. Eu lobortis elementum nibh tellus' },
    { UserName: 'Usuário 6', PostId: 2, Comment: 'Tempus imperdiet nulla malesuada pellentesque elit eget. Aliquam sem et tortor consequat. Eu lobortis elementum nibh tellus' },
    { UserName: 'Usuário 7', PostId: 3, Comment: 'Tempor commodo ullamcorper a lacus vestibulum. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.' },
    { UserName: 'Usuário 8', PostId: 3, Comment: 'Tempor commodo ullamcorper a lacus vestibulum. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.' },
    { UserName: 'Usuário 9', PostId: 3, Comment: 'Tempor commodo ullamcorper a lacus vestibulum. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.' }
  ]);
};
