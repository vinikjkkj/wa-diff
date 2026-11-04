__d(
  "WAWebContactsAndGroupsMyGroupJoins",
  [
    "WALogger",
    "WAWebContactsAndGroupsDBGroupJoins",
    "WAWebContactsAndGroupsSession",
    "WAWebEventEmitter",
    "WAWebPonyfillsIdleCallback",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0,
      u = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(new Map()),
      c = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      d = new (r("WAWebEventEmitter"))();
    function m(e) {
      var t = u.get(),
        n = e.id.toString();
      return t.has(n) ? t.get(n) : void 0;
    }
    function p(e, t, n) {
      var r,
        a,
        i,
        l,
        s = (r = e.groupMetadata) == null ? void 0 : r.owner;
      if (s != null && n(s)) return { addedBy: null, joined: "created" };
      var u =
        (a = t == null ? void 0 : t.author) != null
          ? a
          : (i = e.groupMetadata) == null
            ? void 0
            : i.groupAdder;
      return t != null &&
        t.subtype ===
          o("WAWebContactsAndGroupsDBGroupJoins").INVITE_LINK_JOIN_SUBTYPE
        ? { addedBy: "invite", joined: t.t }
        : {
            addedBy: u != null && !n(u) ? u : null,
            joined: (l = t == null ? void 0 : t.t) != null ? l : null,
          };
    }
    function _(t) {
      var n = t.id.toString(),
        a = f();
      u.get().has(n) ||
        a.has(n) ||
        (a.add(n),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          o("WAWebContactsAndGroupsDBGroupJoins")
            .getMyGroupJoinSince(t.id, s)
            .catch(function (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "requestMyGroupJoin: reading the group notifications failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                null
              );
            })
            .then(function (e) {
              if ((a.delete(n), c.get() === a)) {
                var t = new Map(u.get());
                (t.set(n, e), u.set(t), d.trigger("change"));
              }
            });
        }));
    }
    function f() {
      var e,
        t = (e = c.get()) != null ? e : new Set();
      return (c.set(t), t);
    }
    ((l.myGroupJoins = d),
      (l.getCachedMyGroupJoin = m),
      (l.getGroupJoinInfo = p),
      (l.requestMyGroupJoin = _));
  },
  98,
);
