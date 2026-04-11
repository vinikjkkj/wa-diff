__d(
  "WAWebUsyncUser",
  [
    "WALogger",
    "WAWebBizCoexGatingUtils",
    "WAWebNonEmptyString",
    "WAWebWidValidator",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.withId = function (t) {
            return ((this.$1 = t), this);
          }),
          (n.withLid = function (t) {
            return ((this.$2 = t), this);
          }),
          (n.withPnJid = function (t) {
            return ((this.$3 = t), this);
          }),
          (n.withDeviceHash = function (t) {
            return (
              (this.$5 = o("WAWebNonEmptyString").asMaybeNonEmptyString(t)),
              this
            );
          }),
          (n.withTs = function (t) {
            return ((this.$6 = t), this);
          }),
          (n.withExpectedTs = function (t) {
            return ((this.$7 = t), this);
          }),
          (n.withPhone = function (t) {
            return ((this.$4 = t), this);
          }),
          (n.withPersonaId = function (t) {
            return ((this.$8 = t), this);
          }),
          (n.withUsername = function (t) {
            return ((this.$9 = t), this);
          }),
          (n.withUsernameKey = function (t) {
            return ((this.$10 = t), this);
          }),
          (n.withType = function (t) {
            return ((this.$11 = t), this);
          }),
          (n.withTcToken = function (t) {
            return ((this.$12 = t), this);
          }),
          (n.getDeviceHash = function () {
            return this.$5;
          }),
          (n.getPhone = function () {
            return this.$4;
          }),
          (n.getId = function () {
            return this.$1;
          }),
          (n.getLid = function () {
            return this.$2;
          }),
          (n.getPnJid = function () {
            return this.$3;
          }),
          (n.getTs = function () {
            return this.$6;
          }),
          (n.getExpectedTs = function () {
            return this.$7;
          }),
          (n.getPersonaId = function () {
            return this.$8;
          }),
          (n.getUsername = function () {
            return this.$9;
          }),
          (n.getPin = function () {
            return this.$10;
          }),
          (n.getType = function () {
            return this.$11;
          }),
          (n.getTcToken = function () {
            return this.$12;
          }),
          (n.validate = function () {
            if (
              this.$1 == null &&
              this.$4 == null &&
              this.$9 == null &&
              this.$3 == null
            )
              throw r("err")("user must have an id, phone, username or pnJid");
            if (this.$1) {
              var t = o("WAWebWidValidator").validateWid(
                this.$1.toString(),
                o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled(),
              );
              if (!t) {
                var n;
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "USync user created with invalid jid: ",
                      "",
                    ])),
                  (n = this.$1) == null ? void 0 : n.toString(),
                );
              }
              return t;
            }
            return !0;
          }),
          t
        );
      })();
    l.USyncUser = s;
  },
  98,
);
