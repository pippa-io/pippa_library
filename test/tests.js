const { expect } = require('chai');
const { Devices } = require('../index');

describe('Root', () => {
    it('Devices object should be made available ', () => {
        expect(Devices).to.be.an('object');
        expect(Devices.labelizeUserAgent).to.be.a('function');
    });
});

describe('Devices', () => {
    require('./devices.tests')();
});