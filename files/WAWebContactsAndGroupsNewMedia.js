__d(
  "WAWebContactsAndGroupsNewMedia",
  [
    "Promise",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebChatCollection",
    "WAWebContactsAndGroupsLastSeen",
    "WAWebContactsAndGroupsNewMediaRules",
    "WAWebContactsAndGroupsSession",
    "WAWebContactsAndGroupsSuggestionDismissals",
    "WAWebDBMessageFindLocal",
    "WAWebEventEmitter",
    "WAWebMessageQueryService",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebPonyfillsIdleCallback",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 50,
      c = 5,
      d = 20,
      m = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      p = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      _ = new Map(),
      f = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(_),
      g = new (r("WAWebEventEmitter"))();
    function h() {
      return m.get();
    }
    function y(t) {
      var n,
        a,
        i = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      if (
        !(
          ((n = m.get()) == null ? void 0 : n.lastSeen) === i ||
          ((a = p.get()) == null ? void 0 : a.lastSeen) === i
        )
      ) {
        var l = { lastSeen: i };
        (p.set(l), f.set(_));
        var s = o("WAWebContactsAndGroupsNewMediaRules").getNewMediaSince(i, t);
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          R(s, t)
            .then(function (e) {
              if (p.get() === l) {
                p.set(null);
                var n = Array.from(f.get().values());
                (f.set(_),
                  m.set(v({ keys: e, lastSeen: i, since: s }, n, t)),
                  g.trigger("change"));
              }
            })
            .catch(function (t) {
              (p.get() === l && (p.set(null), f.set(_)),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "requestNewMedia: loading new media failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)));
            });
        });
      }
    }
    function C(e, t) {
      if (p.get() != null) {
        f.set(new Map(f.get()).set(e.id.toString(), e));
        return;
      }
      var n = m.get(),
        r = n != null ? v(n, [e], t) : null;
      r != null && r !== n && (m.set(r), g.trigger("change"));
    }
    function b(e, t) {
      return r("compactMap")(e.keys, function (n) {
        var r = o(
            "WAWebContactsAndGroupsSuggestionDismissals",
          ).isAttentionItemDismissed("newMedia", n, t)
            ? null
            : o("WAWebMsgCollection").MsgCollection.get(n),
          a =
            r != null
              ? o("WAWebContactsAndGroupsNewMediaRules").getNewMediaKind(r)
              : null,
          i =
            r != null
              ? o("WAWebChatCollection").ChatCollection.get(r.id.remote)
              : null;
        return r != null &&
          a != null &&
          i != null &&
          o("WAWebContactsAndGroupsNewMediaRules").isNewMediaGroup(i) &&
          o("WAWebContactsAndGroupsNewMediaRules").isNewMediaMsg(r, e.since, t)
          ? { chat: i, kind: a, msg: r }
          : null;
      });
    }
    function v(e, t, n) {
      var r = t
        .filter(function (t) {
          return S(t, e.since, n);
        })
        .map(function (e) {
          return e.id.toString();
        })
        .filter(function (t) {
          return !e.keys.includes(t);
        });
      return r.length > 0
        ? babelHelpers.extends({}, e, {
            keys: [].concat(r.reverse(), e.keys).slice(0, d),
          })
        : e;
    }
    function S(e, t, n) {
      var r = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebMsgGetters").getId(e).remote,
      );
      return (
        r != null &&
        o("WAWebContactsAndGroupsNewMediaRules").isNewMediaGroup(r) &&
        o("WAWebContactsAndGroupsNewMediaRules").isNewMediaMsg(e, t, n)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (s || (s = n("Promise"))).all([
              E(
                function (t) {
                  return o("WAWebDBMessageFindLocal").getAllMediaMessages(
                    u,
                    t,
                    "before",
                    e,
                  );
                },
                e,
                t,
              ),
              E(
                function (e) {
                  return (
                    o("WAWebBackendRuntime").isWebDiBackendEnabled()
                      ? o("WAWebBackendRuntime").runtime(
                          o("WAWebMessageQueryService").MessageQueryService,
                        ).getAllDocsMessages
                      : o("WAWebDBMessageFindLocal").getAllDocsMessages
                  )({ chat: null, count: u, direction: "before", msgKey: e });
                },
                e,
                t,
              ),
            ]),
            a = r[0],
            i = r[1],
            l = Array.from(
              new Map(
                [].concat(a, i).map(function (e) {
                  return [e.id.toString(), e];
                }),
              ).values(),
            )
              .sort(function (e, t) {
                return (
                  o("WAWebMsgGetters").getT(t) - o("WAWebMsgGetters").getT(e)
                );
              })
              .slice(0, d),
            c = l.filter(function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e.id) == null;
            });
          return (
            c.length > 0 &&
              (yield o(
                "WAWebMsgCollection",
              ).MsgCollection.processMultipleMessages(
                void 0,
                c,
                { add: "search" },
                "msgCollectionGetAllMedia",
              )),
            l.map(function (e) {
              return e.id.toString();
            })
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [],
            i = (function () {
              var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n, l) {
                  var s = yield e(n);
                  a.push.apply(
                    a,
                    s.filter(function (e) {
                      return S(e, t, r);
                    }),
                  );
                  var c = s[s.length - 1];
                  c != null &&
                    s.length === u &&
                    o("WAWebMsgGetters").getT(c) >= t &&
                    a.length < d &&
                    l > 1 &&
                    (yield i(c.id, l - 1));
                },
              );
              return function (t, n) {
                return l.apply(this, arguments);
              };
            })();
          return (yield i(null, c), a);
        })),
        k.apply(this, arguments)
      );
    }
    ((l.newMediaChanges = g),
      (l.getNewMediaVisit = h),
      (l.requestNewMedia = y),
      (l.addNewMedia = C),
      (l.getNewMedia = b));
  },
  98,
);
