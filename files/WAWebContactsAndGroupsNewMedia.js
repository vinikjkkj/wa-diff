__d(
  "WAWebContactsAndGroupsNewMedia",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactsAndGroupsLastSeen",
    "WAWebContactsAndGroupsNewMediaRules",
    "WAWebContactsAndGroupsSession",
    "WAWebContactsAndGroupsSuggestionDismissals",
    "WAWebDBMessageFindLocal",
    "WAWebEventEmitter",
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
      p = null,
      _ = new Map(),
      f = new (r("WAWebEventEmitter"))();
    function g() {
      return m.get();
    }
    function h(t) {
      var n,
        a = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      if (!(((n = m.get()) == null ? void 0 : n.lastSeen) === a || p === a)) {
        ((p = a), _.clear());
        var i = o("WAWebContactsAndGroupsNewMediaRules").getNewMediaSince(a, t);
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          S(i, t)
            .then(function (e) {
              if (p === a) {
                p = null;
                var n = Array.from(_.values());
                (_.clear(),
                  m.set(b({ keys: e, lastSeen: a, since: i }, n, t)),
                  f.trigger("change"));
              }
            })
            .catch(function (t) {
              (p === a && ((p = null), _.clear()),
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
    function y(e, t) {
      if (p != null) {
        _.set(e.id.toString(), e);
        return;
      }
      var n = m.get(),
        r = n != null ? b(n, [e], t) : null;
      r != null && r !== n && (m.set(r), f.trigger("change"));
    }
    function C(e, t) {
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
    function b(e, t, n) {
      var r = t
        .filter(function (t) {
          return v(t, e.since, n);
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
    function v(e, t, n) {
      var r = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebMsgGetters").getId(e).remote,
      );
      return (
        r != null &&
        o("WAWebContactsAndGroupsNewMediaRules").isNewMediaGroup(r) &&
        o("WAWebContactsAndGroupsNewMediaRules").isNewMediaMsg(e, t, n)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (s || (s = n("Promise"))).all([
              L(
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
              L(
                function (e) {
                  return o("WAWebDBMessageFindLocal").getAllDocsMessages({
                    chat: null,
                    count: u,
                    direction: "before",
                    msgKey: e,
                  });
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [],
            i = (function () {
              var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n, l) {
                  var s = yield e(n);
                  a.push.apply(
                    a,
                    s.filter(function (e) {
                      return v(e, t, r);
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
        E.apply(this, arguments)
      );
    }
    ((l.newMediaChanges = f),
      (l.getNewMediaVisit = g),
      (l.requestNewMedia = h),
      (l.addNewMedia = y),
      (l.getNewMedia = C));
  },
  98,
);
