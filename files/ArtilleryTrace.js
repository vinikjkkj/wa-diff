__d(
  "ArtilleryTrace",
  ["invariant", "ArtillerySegment", "ArtillerySequence"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e() {
        ((this.$1 = !1),
          (this.$3 = void 0),
          (this.$4 = {}),
          (this.$5 = {}),
          (this.$6 = []),
          (this.$7 = []),
          (this.$8 = {}),
          (this.$9 = []),
          (this.$10 = null));
      }
      var t = e.prototype;
      return (
        (t.createSequence = function (t) {
          !this.$1 || s(0, 4917);
          var e = new (r("ArtillerySequence"))(t);
          return (this.$6.push(e), e);
        }),
        (t.createSegment = function (t) {
          !this.$1 || s(0, 4918);
          var e = new (r("ArtillerySegment"))(t);
          return (this.$7.push(e), e);
        }),
        (t.markSegment = function (t, n) {
          return (!this.$1 || s(0, 4919), (this.$8[n] = t.getID()), this);
        }),
        (t.connectTrace = function (t, n) {
          !this.$1 || s(0, 4919);
          var e = n != null && n !== "" ? n : this.$2;
          return (
            (e != null && e !== "") || s(0, 4920),
            this.$9.push({ segment: t.getID(), trace: e }),
            this
          );
        }),
        (t.setID = function (t, n) {
          return (
            ((this.$2 == null || this.$2 === "") &&
              (this.$3 == null || this.$3 === "")) ||
              s(0, 4921),
            (this.$2 = t),
            (this.$3 = n),
            this
          );
        }),
        (t.getID = function () {
          return this.$2;
        }),
        (t.getArtillery2ID = function () {
          return this.$3;
        }),
        (t.addProperty = function (t, n) {
          return ((this.$4[t] = n), this);
        }),
        (t.addTagset = function (t, n) {
          return ((this.$5[t] = n), this);
        }),
        (t.addActivePolicies = function (t) {
          return (
            this.addTagset("active_policies", t),
            this.addTagset("policy", t),
            this
          );
        }),
        (t.getProperty = function (t) {
          return this.$4[t];
        }),
        (t.getTagset = function (t) {
          return this.$5[t];
        }),
        (t.getActivePolicies = function () {
          return this.getTagset("active_policies");
        }),
        (t.post = function () {
          (!this.$1 || s(0, 37290, this.$2), (this.$1 = !0));
          var e = this.$10;
          e &&
            e({
              id: this.$2,
              artillery2Id: this.$3,
              properties: this.$4,
              tagsets: this.$5,
              sequences: this.$6.map(function (e) {
                return e.setPosted().getPostData();
              }),
              segments: this.$7.map(function (e) {
                return e.setPosted().getPostData();
              }),
              marks: babelHelpers.extends({}, this.$8),
              connections: this.$9.slice(),
            });
        }),
        (t.setOnPost = function (t) {
          return (!this.$10 || s(0, 4923), (this.$10 = t), this);
        }),
        (t.isPosted = function () {
          return this.$1;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
