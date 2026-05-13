exports.up = (pgm) => {
  pgm.addColumn('users', {
    phone: { 
      type: 'VARCHAR(20)', 
      notNull: false, // Es nullable
      default: null 
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('users', 'phone');
};