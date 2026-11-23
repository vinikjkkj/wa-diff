__d(
  "WAWebContactsAndGroupsNewMedia",
  [
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
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 50,
      u = 5,
      c = 20,
      d = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      m = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      p = new Map(),
      _ = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(p),
      f = new (r("WAWebEventEmitter"))();
    function g() {
      return d.get();
    }
    function h(t) {
      var n,
        a,
        i = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      if (
        !(
          ((n = d.get()) == null ? void 0 : n.lastSeen) === i ||
          ((a = m.get()) == null ? void 0 : a.lastSeen) === i
        )
      ) {
        var l = { lastSeen: i };
        (m.set(l), _.set(p));
        var s = o("WAWebContactsAndGroupsNewMediaRules").getNewMediaSince(i, t);
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          S(s, t)
            .then(function (e) {
              if (m.get() === l) {
                m.set(null);
                var n = Array.from(_.get().values());
                (_.set(p),
                  d.set(b({ keys: e, lastSeen: i, since: s }, n, t)),
                  f.trigger("change"));
              }
            })
            .catch(function (t) {
              (m.get() === l && (m.set(null), _.set(p)),
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
      if (m.get() != null) {
        _.set(new Map(_.get()).set(e.id.toString(), e));
        return;
      }
      var n = d.get(),
        r = n != null ? b(n, [e], t) : null;
      r != null && r !== n && (d.set(r), f.trigger("change"));
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
            keys: [].concat(r.reverse(), e.keys).slice(0, c),
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
    async function S(e, t) {
      var n = await Promise.all([
          R(
            function (t) {
              return o("WAWebDBMessageFindLocal").getAllMediaMessages(
                s,
                t,
                "before",
                e,
              );
            },
            e,
            t,
          ),
          R(
            function (e) {
              return (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageQueryService").MessageQueryService,
                    ).getAllDocsMessages
                  : o("WAWebDBMessageFindLocal").getAllDocsMessages
              )({ chat: null, count: s, direction: "before", msgKey: e });
            },
            e,
            t,
          ),
        ]),
        r = n[0],
        a = n[1],
        i = Array.from(
          new Map(
            [].concat(r, a).map(function (e) {
              return [e.id.toString(), e];
            }),
          ).values(),
        )
          .sort(function (e, t) {
            return o("WAWebMsgGetters").getT(t) - o("WAWebMsgGetters").getT(e);
          })
          .slice(0, c),
        l = i.filter(function (e) {
          return o("WAWebMsgCollection").MsgCollection.get(e.id) == null;
        });
      return (
        l.length > 0 &&
          (await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            l,
            { add: "search" },
            "msgCollectionGetAllMedia",
          )),
        i.map(function (e) {
          return e.id.toString();
        })
      );
    }
    async function R(e, t, n) {
      var r = [],
        a = async function (l, u) {
          var i = await e(l);
          r.push.apply(
            r,
            i.filter(function (e) {
              return v(e, t, n);
            }),
          );
          var d = i[i.length - 1];
          d != null &&
            i.length === s &&
            o("WAWebMsgGetters").getT(d) >= t &&
            r.length < c &&
            u > 1 &&
            (await a(d.id, u - 1));
        };
      return (await a(null, u), r);
    }
    ((l.newMediaChanges = f),
      (l.getNewMediaVisit = g),
      (l.requestNewMedia = h),
      (l.addNewMedia = y),
      (l.getNewMedia = C));
  },
  98,
);
