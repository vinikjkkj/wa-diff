__d(
  "WAWebApiChatUnreadMention",
  [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(t, r) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "addUnreadMentionChat",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["chat"],
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0],
                    a = Array.from(t.keys());
                  if (a.length !== 0) {
                    var i = yield o("WAWebSchemaChat")
                      .getChatTable()
                      .bulkGet(a);
                    if (!i || i.length === 0) {
                      o("WALogger").ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "addUnreadMentionChat: could not find chats",
                          ])),
                      );
                      return;
                    }
                    var l = [];
                    return (
                      i.forEach(function (e) {
                        if (e) {
                          var n,
                            o = e.id.toString(),
                            a = (n = e.unreadMentionsOfMe) != null ? n : [],
                            i = t.get(o);
                          i && (a = a.concat(i));
                          var s = { id: o, unreadMentionsOfMe: a };
                          if (r) {
                            var u,
                              c = (u = r.get(o)) != null ? u : 0;
                            s = {
                              id: o,
                              unreadMentionsOfMe: a,
                              unreadMentionCount: c,
                            };
                          }
                          l.push(s);
                        }
                      }),
                      o("WALogger")
                        .LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "addUnreadMentionChat: bulkCreateOrMerge",
                            ])),
                        )
                        .tags("missing-lid"),
                      o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(l)
                    );
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function _(e) {
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "removeUnreadMentionChat",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["chat"],
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t[0],
                    r = Array.from(e.keys());
                  if (r.length !== 0) {
                    var a = yield o("WAWebSchemaChat")
                      .getChatTable()
                      .bulkGet(r);
                    if (!a || a.length === 0) {
                      o("WALogger").ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "removeUnreadMentionChat: could not find chats",
                          ])),
                      );
                      return;
                    }
                    var i = [];
                    return (
                      a.forEach(function (t) {
                        if (t) {
                          var n,
                            r = (n = t.unreadMentionsOfMe) != null ? n : [],
                            o = e.get(t.id.toString());
                          (o &&
                            (r = r.filter(function (e) {
                              return !o.includes(e.id);
                            })),
                            i.push({
                              id: t.id.toString(),
                              unreadMentionsOfMe: r,
                            }));
                        }
                      }),
                      o("WALogger")
                        .LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "removeUnreadMentionChat: bulkCreateOrMerge",
                            ])),
                        )
                        .tags("missing-lid"),
                      o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(i)
                    );
                  }
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          )
      );
    }
    ((l.addUnreadMentionChat = p), (l.removeUnreadMentionChat = _));
  },
  98,
);
