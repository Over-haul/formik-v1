'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/formik.cjs.production.js');
} else {
  module.exports = require('./dist/formik.cjs.development.js');
}