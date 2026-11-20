__d(
  "WAWebContactsAndGroupsSavedContacts",
  [
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebFrontendContactGetters",
    "WAWebL10N",
    "WAWebUIListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["add", "remove", "reset"],
      s = !1,
      u = !0,
      c = !1,
      d = [],
      m = new WeakMap(),
      p = null,
      _ = new Set();
    function f() {
      return (h(), u && ((u = !1), (c = !1), (d = y())), d);
    }
    function g(e) {
      return (
        h(),
        _.add(e),
        function () {
          (_.delete(e),
            _.size === 0 &&
              p != null &&
              (window.cancelAnimationFrame(p), (p = null), (u = !0)));
        }
      );
    }
    function h() {
      s ||
        ((s = !0),
        []
          .concat(
            e.map(function (e) {
              return new (o("WAWebUIListener").Listener)(
                o("WAWebContactCollection").ContactCollection,
                e,
                b,
              );
            }),
            [
              new (o("WAWebUIListener").Listener)(
                o("WAWebContactCollection").ContactCollection,
                "change",
                C,
              ),
              new (o("WAWebUIListener").Listener)(
                o("WAWebCmd").Cmd,
                "set_collator",
                b,
              ),
              new (o("WAWebUIListener").Listener)(
                o("WAWebCmd").Cmd,
                "on_ab_props_update_from_bridge",
                b,
              ),
              new (o("WAWebUIListener").Listener)(
                r("WAWebL10N"),
                "locale_change",
                b,
              ),
            ],
          )
          .forEach(function (e) {
            return e.engage();
          }));
    }
    function y() {
      o("WAWebContactCollection").ContactCollection.ensureSorted();
      var e = new WeakMap();
      for (var t of o(
        "WAWebContactCollection",
      ).ContactCollection.getModelsArray())
        e.set(t, R(t));
      return (
        (m = e),
        o("WAWebContactCollectionUtils").getFilteredContacts(
          o("WAWebContactCollection").ContactCollection,
          {},
        )
      );
    }
    function C() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var o = t[0];
      if (
        _.size === 0 ||
        !(o instanceof r("WAWebContactModel")) ||
        m.get(o) !== R(o)
      ) {
        b();
        return;
      }
      ((c = !0), v());
    }
    function b() {
      ((u = !0), v());
    }
    function v() {
      _.size === 0 || p != null || (p = window.requestAnimationFrame(S));
    }
    function S() {
      ((p = null),
        c && !u && (d = [].concat(d)),
        (c = !1),
        f(),
        _.forEach(function (e) {
          return e();
        }));
    }
    function R(e) {
      var t, n, r, a, i;
      return [
        o("WAWebContactCollectionUtils").passesContactFilter(e, {}) ? "1" : "0",
        (t = e.name) != null ? t : "",
        o("WAWebContactComparator").headerOf(e),
        (n = o("WAWebContactGetters").getNotifyName(e)) != null ? n : "",
        (r = e.verifiedName) != null ? r : "",
        String((a = e.verifiedLevel) != null ? a : ""),
        (i = o("WAWebFrontendContactGetters").getShownOrgMemberName(e)) != null
          ? i
          : "",
      ].join("");
    }
    ((l.getSavedContacts = f), (l.subscribeToSavedContacts = g));
  },
  98,
);
