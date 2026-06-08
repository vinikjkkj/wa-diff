__d(
  "WAWebDBMessageFindLocal",
  [
    "Promise",
    "WACommonTaskScheduler",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebDBGetEventMessagesForChat",
    "WAWebDBGetStarredMessagesForChat",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebFetchMessagesInThread",
    "WAWebFtsClient",
    "WAWebMediaHubGating",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "justknobx",
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
      return H(t, n, r)
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
      return z({ anchor: t, count: n, threadId: r })
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
    function g(t, r, a, i, l) {
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
                  : o("WAWebDBMessageUtils").craftInternalId(
                      t.toString(),
                      o("WAWebDBMessageUtils").getInChatMsgId(
                        s.internalId || "",
                      ),
                    )),
              (d = !0))
            : ((u =
                s == null
                  ? o("WAWebDBMessageUtils").beginningOfChat(t)
                  : o("WAWebDBMessageUtils").craftInternalId(
                      t.toString(),
                      o("WAWebDBMessageUtils").getInChatMsgId(
                        s.internalId || "",
                      ),
                    )),
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
    function h(e) {
      var t = e.anchor,
        n = e.chat,
        r = e.count;
      return n != null
        ? o("WAWebDBGetStarredMessagesForChat").getStarredMessagesForChat(
            n,
            r,
            t,
          )
        : y(r, t);
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield b(t, function (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e) {
      var t = e.anchor,
        n = e.count;
      return L(n, t);
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield b(t, function (e) {
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
          return D(i);
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .equals(
              ["callOutcome"],
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
            );
          return D(e);
        })),
        I.apply(this, arguments)
      );
    }
    var T = 100;
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            n = o("WAWebABProps").getABPropConfigValue(
              "wmi_worker_scheduler_web",
            );
          if (n)
            for (var a = 0; a < e.length; a++)
              (t.push(o("WAWebDBMessageSerialization").messageFromDbRow(e[a])),
                yield r("WACommonTaskScheduler").yield());
          else
            for (
              var i = r("justknobx")._("3116") || T, l = 0;
              l < e.length;
              l += i
            ) {
              for (var s = Math.min(l + i, e.length), u = l; u < s; u++)
                t.push(o("WAWebDBMessageSerialization").messageFromDbRow(e[u]));
              s < e.length &&
                (yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            }
          return t;
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      var e,
        t =
          (e = o("WAWebUserPrefsMultiDevice").getPairingTimestamp()) != null
            ? e
            : o("WATimeUtils").unixTime();
      return (
        t -
        o("WATimeUtils").DAY_SECONDS *
          o("WAWebMediaHubGating").getMaxDaysInMediaHub()
      );
    }
    function P(e, t, n, r, o) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            n === void 0 && (n = "before");
            var i = n === "before",
              l = yield b(
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      var t = e.anchor,
        r = e.chat,
        a = e.count,
        i = e.direction,
        l = e.mediaType;
      return l === "allMedia"
        ? w(a, t, i)
        : l === "allLinks"
          ? F(a, t, i)
          : l === "allDocs"
            ? B({ chat: r, count: a, direction: i, msgKey: t })
            : l === "url"
              ? r != null
                ? g(r, a, i, "hasLink", t).then(function (e) {
                    return e.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    });
                  })
                : (c || (c = n("Promise"))).resolve([])
              : l === "document"
                ? r != null
                  ? g(r, a, i, "isDocMsg", t).then(function (e) {
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
                          ? g(r, a, i, e, t).then(function (e) {
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
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = $());
            var a = yield P(e, t, n, r, [
              o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG,
              o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG |
                o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK,
            ]);
            return a.map(function (e) {
              return o("WAWebDBMessageSerialization").messageFromDbRow(e);
            });
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = yield P(e, t, n, r, [
                (a = o("WAWebMsgType")).MESSAGE_TYPE_FLAGS.HAS_LINK,
                a.MESSAGE_TYPE_FLAGS.MEDIA_MSG | a.MESSAGE_TYPE_FLAGS.HAS_LINK,
                a.MESSAGE_TYPE_FLAGS.DOC_MSG | a.MESSAGE_TYPE_FLAGS.HAS_LINK,
              ]);
            return i.map(function (e) {
              return o("WAWebDBMessageSerialization").messageFromDbRow(e);
            });
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.count,
            r = e.direction,
            a = e.msgKey;
          if (t != null)
            return g(t, n, r, "isDocMsg", a).then(function (e) {
              return e.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              });
            });
          var i = yield P(n, a, r, void 0, [
            o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG,
            o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG |
              o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK,
          ]);
          return i.map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      var t = e.anchor,
        n = e.chat,
        r = e.count,
        a = o("WAWebModelStorageUtils").getStorage();
      return n != null &&
        a.doesLocalSchemaIncludeVersion(a.versions.version(152))
        ? o("WAWebDBGetEventMessagesForChat").getEventMessagesForChat(n, r, t)
        : U(r, t);
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield b(t, function (e) {
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
        V.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
            _ = o("WAWebDBMessageUtils").craftInternalId(i, g);
          }
          var h = { lowerInclusive: !0, upperInclusive: !1 },
            y = yield o(
              "WAWebDBMessageStoreUtils",
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
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
              ((a = o("WAWebDBMessageUtils").craftInternalId(u, r)),
                (c = o("WAWebDBMessageUtils").craftInternalId(u, p)),
                (c = o("WAWebDBMessageUtils").endOfChat(t.remote)));
            }
            var _ = { lowerInclusive: !1, upperInclusive: !0 };
            return o("WAWebDBMessageStoreUtils")
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
      (l.queryMessageType = g),
      (l.msgFindStarred = h),
      (l.msgFindSearch = S),
      (l.msgFindCallLog = R),
      (l.getVoipOngoingCallLogMessages = k),
      (l.getMediaAvailableMsgBoundary = $),
      (l.msgFindMedia = M),
      (l.getAllMediaMessages = w),
      (l.getAllLinksMessages = F),
      (l.getAllDocsMessages = B),
      (l.msgFindEvents = q));
  },
  98,
);
