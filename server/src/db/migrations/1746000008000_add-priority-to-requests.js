exports.up = (pgm) => {
  pgm.addColumn('requests', {
    priority: { 
      type: 'VARCHAR(20)', 
      notNull: true, 
      default: 'normal' 
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('requests', 'priority');
};