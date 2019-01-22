const chai = require('chai');
const expect = chai.expect;
const BlacklistUrls = require('../src/blacklisturls');

module.exports = () => {

    describe('match', () => {
        
        it('should match', () => {
            expect(BlacklistUrls.match('/sftp_config.json')).to.to.equal(true);
        });

        it('should not match', () => {
            expect(BlacklistUrls.match('/somethingelse')).to.to.equal(false);
        });
    });
};