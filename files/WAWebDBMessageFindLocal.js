__d(
  "WAWebDBMessageFindLocal",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebCommonTaskScheduler",
    "WAWebDBGetEventMessagesForChat",
    "WAWebDBGetStarredMessagesForChat",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebDBQueryChatVisibleMessageHelper",
    "WAWebFetchMessagesInThread",
    "WAWebFtsClient",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 20,
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NoAnchorMessageError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function p(e) {
      var t = e.anchor,
        n = e.count,
        r = e.threadId;
      return G(t, n, r)
        .then(g)
        .then(function (e) {
          return { messages: e, status: 200 };
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(m, function () {
            return { messages: [], status: 404 };
          }),
        );
    }
    function _(e) {
      var t = e.anchor,
        n = e.count,
        r = e.threadId;
      return j({ anchor: t, count: n, threadId: r })
        .then(g)
        .then(function (e) {
          return { messages: e, status: 200 };
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(m, function () {
            return { messages: [], status: 404 };
          }),
        );
    }
    function f(e) {
      var t = e.anchor,
        n = e.count,
        r = e.direction,
        o = e.threadId;
      return r === "before"
        ? p({ anchor: t, count: n, threadId: o })
        : r === "after"
          ? _({ anchor: t, count: n, threadId: o })
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  r,
              );
            })();
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            yield o("WAWebDBProcessReplyMsgs").hydrateReplyMsgsSafely(
              e,
              "msg-load",
            ),
            e
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, r, a, i, l) {
      var s =
        l == null
          ? (c || (c = n("Promise"))).resolve(void 0)
          : o("WAWebSchemaMessage")
              .getMessageTable()
              .equals(["id"], l.toString());
      return s.then(function (n) {
        if (l && n != null && n.length === 0)
          throw (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Anchor message ",
                  " does not exist in message table",
                ])),
              l && l.toString(),
            ),
            new m()
          );
        var s = n == null ? void 0 : n[0],
          u,
          c,
          d = !1;
        return (
          a === "before"
            ? ((u = o("WAWebDBMessageUtils").beginningOfChat(t)),
              (c =
                s == null
                  ? o("WAWebDBMessageUtils").endOfChat(t)
                  : o("WAWebDBMessageUtils").craftInternalId({
                      chatId: t.toString(),
                      inChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(
                        s.internalId || "",
                      ),
                    })),
              (d = !0))
            : ((u =
                s == null
                  ? o("WAWebDBMessageUtils").beginningOfChat(t)
                  : o("WAWebDBMessageUtils").craftInternalId({
                      chatId: t.toString(),
                      inChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(
                        s.internalId || "",
                      ),
                    })),
              (c = o("WAWebDBMessageUtils").endOfChat(t))),
          o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["internalId", i], [u, 0], [c, 1 / 0], {
              lowerInclusive: !1,
              upperInclusive: !1,
              limit: r,
              reverse: d,
            })
        );
      });
    }
    function C(e) {
      var t = e.anchor,
        n = e.chat,
        r = e.count;
      return n != null
        ? o("WAWebDBGetStarredMessagesForChat").getStarredMessagesForChat(
            n,
            r,
            t,
          )
        : b(r, t);
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield S(t, function (e) {
              return e == null ? void 0 : e.isStarred;
            }),
            r = n[0],
            a = n[1],
            i = 0;
          return o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["isStarred"], i, a, {
              lowerInclusive: !1,
              upperInclusive: !1,
              reverse: !0,
              limit: e,
            })
            .then(function (e) {
              return e.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              });
            });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            (n === void 0 && (n = "before"), r === void 0 && (r = -1 / 0));
            var a = null;
            e != null &&
              (a = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .get(e.toString()));
            var i = a == null ? void 0 : t(a);
            return n === "before"
              ? [r, i != null ? i : 1 / 0]
              : [i != null ? i : r, 1 / 0];
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t;
      if (e.label != null)
        return (c || (c = n("Promise"))).resolve({
          messages: [],
          eof: !0,
          canceled: !1,
          status: 200,
        });
      var r = {
        remote: (t = e.remote) == null ? void 0 : t.toString(),
        page: e.page,
        limit: e.count,
      };
      return o("WAWebFtsClient").ftsClient.search(e.searchTerm, r);
    }
    function E(e) {
      var t = e.anchor,
        n = e.count;
      return k(n, t);
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield S(t, function (e) {
              return e == null ? void 0 : e.isCallLogMsg;
            }),
            r = n[0],
            a = n[1],
            i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["isCallLogMsg"], r, a, {
                lowerInclusive: !1,
                upperInclusive: !0,
                reverse: !0,
                limit: e,
              });
          return x(i);
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .equals(
              ["callOutcome"],
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
            );
          return x(e);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t = [], n = 0; n < e.length; n++)
            (t.push(o("WAWebDBMessageSerialization").messageFromDbRow(e[n])),
              yield r("WAWebCommonTaskScheduler").yield());
          return t;
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      var e,
        t =
          (e = o("WAWebUserPrefsMultiDevice").getPairingTimestamp()) != null
            ? e
            : o("WATimeUtils").unixTime();
      return (
        t -
        o("WATimeUtils").DAY_SECONDS *
          o("WAWebABProps").getABPropConfigValue("media_hub_history_max_days")
      );
    }
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            n === void 0 && (n = "before");
            var i = n === "before",
              l = yield S(
                t,
                function (e) {
                  return e == null ? void 0 : e.t;
                },
                n,
                r,
              ),
              s = l[0],
              u = l[1],
              c = function (t) {
                return [
                  [t, s],
                  [t, u],
                ];
              },
              d = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .inAnyRange(
                  ["typeFlag", "t"],
                  a.map(function (e) {
                    return c(e);
                  }),
                  { reverse: i, limit: e },
                );
            return d;
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t = e.anchor,
        r = e.chat,
        a = e.count,
        i = e.direction,
        l = e.mediaType;
      return l === "allMedia"
        ? A(a, t, i)
        : l === "allLinks"
          ? O({ count: a, direction: i, msgKey: t })
          : l === "allDocs"
            ? W({ chat: r, count: a, direction: i, msgKey: t })
            : l === "url"
              ? r != null
                ? y(r, a, i, "hasLink", t).then(function (e) {
                    return e.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    });
                  })
                : (c || (c = n("Promise"))).resolve([])
              : l === "document"
                ? r != null
                  ? y(r, a, i, "isDocMsg", t).then(function (e) {
                      return e.map(function (e) {
                        return o(
                          "WAWebDBMessageSerialization",
                        ).messageFromDbRow(e);
                      });
                    })
                  : (c || (c = n("Promise"))).resolve([])
                : (c || (c = n("Promise")))
                    .all(
                      [
                        "isMediaMsg",
                        "isDocMsg",
                        "hasLink",
                        "isCarouselMsg",
                      ].map(function (e) {
                        return r != null
                          ? y(r, a, i, e, t).then(function (e) {
                              return e.map(function (e) {
                                return o(
                                  "WAWebDBMessageSerialization",
                                ).messageFromDbRow(e);
                              });
                            })
                          : (c || (c = n("Promise"))).resolve([]);
                      }),
                    )
                    .then(function (e) {
                      var t = e[0],
                        n = e[1],
                        r = e[2],
                        o = e[3],
                        a = [t, r, n, o].flat();
                      return {
                        docCount: n.length,
                        linkCount: r.length,
                        mediaCount: t.length,
                        messages: a,
                      };
                    });
    }
    function A(e, t, n, r) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = P());
            var a = yield N(e, t, n, r, [
              o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG,
              o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG |
                o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK,
            ]);
            return a.map(function (e) {
              return o("WAWebDBMessageSerialization").messageFromDbRow(e);
            });
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.count,
            r = e.direction,
            a = e.limitBoundary,
            i = e.msgKey,
            l = yield N(n, i, r, a, [
              (t = o("WAWebMsgType")).MESSAGE_TYPE_FLAGS.HAS_LINK,
              t.MESSAGE_TYPE_FLAGS.MEDIA_MSG | t.MESSAGE_TYPE_FLAGS.HAS_LINK,
              t.MESSAGE_TYPE_FLAGS.DOC_MSG | t.MESSAGE_TYPE_FLAGS.HAS_LINK,
            ]);
          return l.map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.count,
            r = e.direction,
            a = e.msgKey;
          if (t != null)
            return y(t, n, r, "isDocMsg", a).then(function (e) {
              return e.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              });
            });
          var i = yield N(n, a, r, void 0, [
            o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG,
            o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG |
              o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK,
          ]);
          return i.map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      var t = e.anchor,
        n = e.chat,
        r = e.count,
        a = o("WAWebModelStorageUtils").getStorage();
      return n != null &&
        a.doesLocalSchemaIncludeVersion(a.versions.version(152))
        ? o("WAWebDBGetEventMessagesForChat").getEventMessagesForChat(n, r, t)
        : V(r, t);
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield S(t, function (e) {
              return e == null ? void 0 : e.isEventMsg;
            }),
            r = n[0],
            a = n[1],
            i = 0;
          return o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["isEventMsg"], i, a, {
              lowerInclusive: !1,
              upperInclusive: !1,
              reverse: !0,
              limit: e,
            })
            .then(function (e) {
              return e.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              });
            });
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if ((t === void 0 && (t = d), !e.remote))
            return (c || (c = n("Promise"))).resolve([]);
          var i = e.remote.toString(),
            l = void 0;
          if (e instanceof r("WAWebMsgKey")) {
            var s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .equals(["id"], e.toString());
            if (s.length === 0)
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Anchor message ",
                      " does not exist in message table",
                    ])),
                  e.toString(),
                ),
                new m()
              );
            l = s[0];
          }
          var p, _, f;
          if (a != null)
            ((p = o("WAWebFetchMessagesInThread").beginningOfThread(a)),
              (_ =
                l != null
                  ? o("WAWebDBMessageUtils").craftInternalThreadId(
                      o("WAWebDBMessageUtils").getInChatMsgId(
                        l.internalId || "",
                      ),
                      a,
                    )
                  : o("WAWebFetchMessagesInThread").endOfThread(a)),
              (f = ["internalThreadIDs"]));
          else if (
            ((p = o("WAWebDBMessageUtils").beginningOfChat(e.remote)),
            (_ = o("WAWebDBMessageUtils").endOfChat(e.remote)),
            l)
          ) {
            var g = o("WAWebDBMessageUtils").getInChatMsgId(l.internalId || "");
            _ = o("WAWebDBMessageUtils").craftInternalId({
              chatId: i,
              inChatMsgId: g,
            });
          }
          var h = { lowerInclusive: !0, upperInclusive: !1 },
            y = yield o(
              "WAWebDBQueryChatVisibleMessageHelper",
            ).queryChatVisibleMessageHelper({
              lowerBound: p,
              upperBound: _,
              options: babelHelpers.extends({}, h, { reverse: !0 }),
              count: t,
              index: f,
            });
          return y.reverse().map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      var t = e.anchor,
        a = e.count,
        i = a === void 0 ? d : a,
        l = e.threadId;
      if (t instanceof r("WAWebMsgKey")) {
        var u = t.remote.toString();
        return o("WAWebSchemaMessage")
          .getMessageTable()
          .equals(["id"], t.toString())
          .then(function (e) {
            if (e.length === 0)
              throw (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Anchor message ",
                      " does not exist in message table",
                    ])),
                  t.toString(),
                ),
                new m()
              );
            var n = e[0],
              r = o("WAWebDBMessageUtils").getInChatMsgId(n.internalId || ""),
              a,
              c,
              d;
            if (l != null)
              ((a = o("WAWebDBMessageUtils").craftInternalThreadId(r, l)),
                (c = o("WAWebFetchMessagesInThread").endOfThread(l)),
                (d = ["internalThreadIDs"]));
            else {
              var p = r + i;
              ((a = o("WAWebDBMessageUtils").craftInternalId({
                chatId: u,
                inChatMsgId: r,
              })),
                (c = o("WAWebDBMessageUtils").craftInternalId({
                  chatId: u,
                  inChatMsgId: p,
                })),
                (c = o("WAWebDBMessageUtils").endOfChat(t.remote)));
            }
            var _ = { lowerInclusive: !1, upperInclusive: !0 };
            return o("WAWebDBQueryChatVisibleMessageHelper")
              .queryChatVisibleMessageHelper({
                lowerBound: a,
                upperBound: c,
                options: _,
                count: i,
                index: d,
              })
              .then(function (e) {
                return e.map(function (e) {
                  return o("WAWebDBMessageSerialization").messageFromDbRow(e);
                });
              });
          });
      }
      return (c || (c = n("Promise"))).resolve([]);
    }
    ((l.msgFindBefore = p),
      (l.msgFindAfter = _),
      (l.msgFindByDirection = f),
      (l.queryMessageType = y),
      (l.msgFindStarred = C),
      (l.msgFindSearch = L),
      (l.msgFindCallLog = E),
      (l.getVoipOngoingCallLogMessages = T),
      (l.getMediaAvailableMsgBoundary = P),
      (l.msgFindMedia = w),
      (l.getAllMediaMessages = A),
      (l.getAllLinksMessages = O),
      (l.getAllDocsMessages = W),
      (l.msgFindEvents = U));
  },
  98,
);
