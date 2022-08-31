/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Posts').del()
  await knex('Posts').insert([
    {Title: 'Post 1', Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus malesuada mi id scelerisque. Donec gravida ligula mi, vitae mattis purus consectetur a. Vivamus suscipit a nisi id hendrerit. Pellentesque ac dapibus odio. Donec pretium urna sit amet quam rhoncus, sed porta ipsum mattis. Nullam sed sodales neque. Etiam efficitur vestibulum tempor. Maecenas vitae nunc dui.'},
    {Title: 'Post 2', Content:'Donec tempus molestie neque vel aliquet. Proin quis laoreet eros. Curabitur non diam tortor. Curabitur quis turpis in ipsum fermentum accumsan. Aenean eu tortor nulla. In pharetra sed enim vitae ullamcorper. Aenean posuere dolor id dolor fringilla semper. Cras quam mi, facilisis vel sagittis sit amet, faucibus eget eros. Nunc malesuada tristique nisi, sed ullamcorper arcu varius et. Praesent sodales aliquet nisi in gravida. Sed eu erat ut nisl molestie efficitur ut id lorem. Nam porttitor urna posuere nibh ornare consectetur. Sed nunc turpis, finibus consequat sollicitudin sit amet, condimentum ac justo. Etiam vitae enim congue, bibendum ipsum a, aliquet elit. Mauris nec viverra risus. Phasellus dapibus velit justo, quis eleifend nisi aliquam vitae.'},
    {Title: 'Post 3', Content:'Ut sed porta felis. Nullam risus nibh, faucibus at velit sit amet, ultrices scelerisque arcu. Nunc tempor aliquet felis, sit amet maximus nibh semper ut. In auctor nulla at dictum facilisis. Vestibulum sit amet ipsum elementum, vulputate risus vel, consectetur leo. Fusce ex tellus, auctor in ipsum convallis, dapibus pulvinar mauris. Nam condimentum quis orci tristique volutpat. Proin vitae consectetur lorem, et vehicula quam. Sed tempor orci erat, ut auctor metus efficitur vel.'}
  ]);
};
