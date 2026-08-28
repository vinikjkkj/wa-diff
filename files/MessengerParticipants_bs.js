__d(
  "MessengerParticipants.bs",
  [
    "fbt",
    "CurrentUser",
    "FBIDForMercury",
    "ImmutableObject",
    "MercuryAssert",
    "MercuryIDs",
    "MercuryVanityIDMap.bs",
    "MessengerParticipantsFetcher.bs",
    "ODS",
    "Promise",
    "bs_belt_Array",
    "bs_caml_obj",
    "bs_caml_option",
    "bs_curry",
    "bs_js_null_undefined",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { contents: 1 },
      c = {},
      d = new Set(),
      m = {},
      p = function (t, n) {
        return (delete t[n], 0);
      },
      _ = function (t, n) {
        return (delete t[n], 0);
      };
    function f(e) {
      var t = n("CurrentUser").getAppID();
      return n("CurrentUser").isWorkUser() || t === (0x5a31088e0c758).toString()
        ? l._(/*BTDS*/ "Workplace user")
        : n("CurrentUser").isWorkroomsUser() ||
            t === (424940172743869).toString()
          ? l._(/*BTDS*/ "Workrooms User")
          : l._(/*BTDS*/ "Facebook user");
    }
    function g(e) {
      var t = e.user_type;
      if (
        t == null ||
        !(
          n("bs_caml_obj").caml_equal(t, "user") ||
          n("bs_caml_obj").caml_equal(t, "friend")
        )
      )
        return e;
      var r = e.href,
        o = e.vanity;
      if (r != null || o != null) return e;
      var a = f();
      return Object.assign(e, { name: a, short_name: a });
    }
    function h(e) {
      Object.keys(c).forEach(function (e) {
        return _(c, e);
      });
    }
    function y(e) {
      var t = e.id,
        r = e.vanity;
      r != null && n("MercuryVanityIDMap.bs").set(r, t);
      var o = c[t];
      o !== void 0
        ? (c[t] = n("ImmutableObject").set(
            n("bs_caml_option").valFromOption(o),
            e,
          ))
        : (c[t] = new (n("ImmutableObject"))(g(e)));
    }
    function C(e) {
      var t = e.participants;
      if (t != null) {
        t.map(y);
        return;
      }
    }
    function b(e) {
      var t = e.preloaded_participants;
      if (t != null) {
        t.map(y);
        return;
      }
    }
    function v(t, r, o) {
      var a = {},
        i = [];
      if (
        (t.forEach(function (e) {
          var t = c[e];
          t !== void 0
            ? (a[e] = n("bs_caml_option").valFromOption(t))
            : i.push(e);
        }),
        i.length !== 0)
      ) {
        var l = [];
        i.forEach(function (e) {
          if (!d.has(e)) {
            var t = n("MercuryIDs").getUserIDFromParticipantID(e);
            if (t != null) {
              (l.push(t), d.add(e));
              return;
            }
          }
        });
        var _ = u.contents.toString();
        return (
          (m[_] = [t, o]),
          (u.contents = (u.contents + 1) | 0),
          l.length > 0 &&
            n("MessengerParticipantsFetcher.bs")
              .$$fetch({ ids: l, source: r })
              .then(function (t) {
                return (
                  t.forEach(function (e) {
                    c[e.id] = new (n("ImmutableObject"))(e);
                    var t = e.id,
                      r = e.vanity;
                    (r != null && n("MercuryVanityIDMap.bs").set(r, t),
                      d.delete(t));
                  }),
                  Object.keys(m).forEach(function (e) {
                    var t = m[e];
                    if (t !== void 0) {
                      var r = t[0],
                        o = {};
                      if (
                        (r.forEach(function (e) {
                          var t = c[e];
                          if (t !== void 0) {
                            o[e] = n("bs_caml_option").valFromOption(t);
                            return;
                          }
                        }),
                        Object.keys(o).length === r.length)
                      )
                        return (p(m, e), t[1](o));
                    }
                  }),
                  (e || (e = n("ODS"))).bumpEntityKey(
                    2966,
                    "messenger_webgraphql",
                    "fetch_participant.success",
                  ),
                  (s || (s = n("Promise"))).resolve()
                );
              })
              .catch(function (t) {
                return (
                  (e || (e = n("ODS"))).bumpEntityKey(
                    2966,
                    "messenger_webgraphql",
                    "fetch_participant.failure",
                  ),
                  (s || (s = n("Promise"))).resolve()
                );
              }),
          _
        );
      }
      return (o(a), null);
    }
    function S(e, t) {
      return v(e, null, t);
    }
    function R(e, t) {
      return (
        n("MercuryAssert").isParticipantID(e),
        v([e], null, function (r) {
          var o = r[e];
          if (o !== void 0)
            return n("bs_curry")._1(t, n("bs_caml_option").valFromOption(o));
        })
      );
    }
    function L(e) {
      return n("bs_js_null_undefined").fromOption(c[e]);
    }
    function E(e, t) {
      var r = [],
        o = [];
      if (
        (e.forEach(function (e) {
          var t = L(e);
          t == null ? r.push(e) : o.push(t);
        }),
        r.length === 0)
      )
        return [o, null];
      var a = v(r, null, function (r) {
        return n("bs_curry")._1(
          t,
          n("bs_belt_Array").keepMap(e, function (e) {
            return n("bs_caml_option").nullable_to_opt(L(e));
          }),
        );
      });
      return [o, a];
    }
    function k(e, t) {
      var r = function (t) {
          return n("immutable").Map(
            t.map(function (e) {
              return [e.id, e];
            }),
          );
        },
        o = function (o) {
          return n("bs_curry")._1(t, r(o));
        },
        a = E(e, o);
      return [r(a[0]), a[1]];
    }
    function I(e) {
      return p(m, e);
    }
    function T(e) {
      if (e == null) return null;
      if (n("MercuryVanityIDMap.bs").hasVanity(e)) {
        var t = n("MercuryVanityIDMap.bs").getID(e);
        return t == null ? null : t;
      }
      var r = /^\d+$/;
      if (!r.test(e)) return null;
      var o = n("FBIDForMercury").ofString(e);
      return o !== void 0
        ? n("MercuryIDs").getParticipantIDFromUserID(
            n("bs_caml_option").valFromOption(o),
          )
        : null;
    }
    ((i.reset = h),
      (i.addParticipants = C),
      (i.addPreloadedParticipants = b),
      (i.getDefaultName = f),
      (i.get = R),
      (i.getNow = L),
      (i.getMultiWithSource = v),
      (i.getMulti = S),
      (i.getMultiEager = E),
      (i.getMultiEagerMap = k),
      (i.removeCallback = I),
      (i.getIDFromVanityOrFBID = T));
  },
  130,
);
