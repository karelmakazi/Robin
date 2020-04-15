
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('focus').del()
    .then(function () {
      // Inserts seed entries
      return knex('focus').insert([
        {focus_id: 1, f_timestamp: '2020-04-11T01:23:41.121Z', f_area:'stance', 
        f_detail: 'Adjusting my angle towards the target', f_duration:5, f_status:'completed'},
        {focus_id: 2, f_timestamp: '2020-04-11T01:23:41.121Z', f_area:'grip', 
        f_detail: 'Trying a looser grip.', f_duration:10, f_status:'completed'},
        {focus_id: 3, f_timestamp: '2020-04-11T01:23:41.121Z', f_area:'draw', 
        f_detail: 'Working on a smooth draw.', f_duration:8, f_status:'completed'},
        {focus_id: 4, f_timestamp: '2020-04-11T01:23:41.121Z', f_area:'anchor', 
        f_detail: 'Concentrating on consistancy.', f_duration:3, f_status:'completed'},
        {focus_id: 5, f_timestamp: '2020-04-11T01:23:41.121Z', f_area:'aim', 
        f_detail: 'Testing instinctive aim.', f_duration:12, f_status:'active'},
      ]);
    });
};
