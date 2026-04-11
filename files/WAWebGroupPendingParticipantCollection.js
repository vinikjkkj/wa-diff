__d(
  "WAWebGroupPendingParticipantCollection",
  [
    "WAWebCollection",
    "WAWebGroupParticipantComparator",
    "WAWebGroupParticipantModel",
    "WAWebL10N",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var o;
        return (
          n === void 0 && (n = {}),
          (o = e.call(this, t, n) || this),
          (o.$PendingParticipantCollection$p_1 = r("lodash").debounce(
            function () {
              return o.sort();
            },
            1e3,
          )),
          o.listenTo(
            o,
            "change:contact.name",
            o.$PendingParticipantCollection$p_1,
          ),
          o.listenTo(
            r("WAWebL10N"),
            "locale_change",
            o.$PendingParticipantCollection$p_1,
          ),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (this.forEach(function (e) {
            e.delete();
          }),
            this.stopListening(),
            this.reset());
        }),
        (n.ensureSorted = function () {
          this.$PendingParticipantCollection$p_1.flush();
        }),
        (n.set = function (n, r) {
          return (
            r === void 0 && (r = {}),
            r.isParticipantCollectionAdd !== !0 && (r.remove = !0),
            e.prototype.set.call(this, n, r)
          );
        }),
        (n.add = function (n, r) {
          return (
            r === void 0 && (r = {}),
            (r.isParticipantCollectionAdd = !0),
            e.prototype.add.call(this, n, r)
          );
        }),
        t
      );
    })(r("WAWebCollection"));
    ((e.model = r("WAWebGroupParticipantModel")),
      (e.comparator = r("WAWebGroupParticipantComparator")),
      (l.default = e));
  },
  98,
);
