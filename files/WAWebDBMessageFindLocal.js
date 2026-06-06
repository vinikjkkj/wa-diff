__d(
  "WAWebDBMessageFindLocal",
  [
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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 20,
      d = (function (e) {
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
    function m(e) {
      var t = e.anchor,
        n = e.count,
        r = e.threadId;
      return M(t, n, r)
        .then(function (e) {
          return { messages: e, status: 200 };
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(d, function () {
            return { messages: [], status: 404 };
          }),
        );
    }
    function p(e) {
      var t = e.anchor,
        n = e.count,
        r = e.threadId;
      return w({ anchor: t, count: n, threadId: r })
        .then(function (e) {
          return { messages: e, status: 200 };
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(d, function () {
            return { messages: [], status: 404 };
          }),
        );
    }
    function _(e) {
      var t = e.anchor,
        n = e.count,
        r = e.direction,
        o = e.threadId;
      return r === "before"
        ? m({ anchor: t, count: n, threadId: o })
        : r === "after"
          ? p({ anchor: t, count: n, threadId: o })
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  r,
              );
            })();
    }
    async function f(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .equals(["vcardWAids"], e.toString())
        .then(function (e) {
          return e.map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          });
        });
    }
    function g(t, n, r, a, i) {
      var l =
        i == null
          ? Promise.resolve(void 0)
          : o("WAWebSchemaMessage")
              .getMessageTable()
              .equals(["id"], i.toString());
      return l.then(function (l) {
        if (i && l != null && l.length === 0)
          throw (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Anchor message ",
                  " does not exist in message table",
                ])),
              i && i.toString(),
            ),
            new d()
          );
        var s = l == null ? void 0 : l[0],
          u,
          c,
          m = !1;
        return (
          r === "before"
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
              (m = !0))
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
            .between(["internalId", a], [u, 0], [c, 1 / 0], {
              lowerInclusive: !1,
              upperInclusive: !1,
              limit: n,
              reverse: m,
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
    async function y(e, t) {
      var n = await C(t, function (e) {
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
    }
    async function C(e, t, n, r) {
      (n === void 0 && (n = "before"), r === void 0 && (r = -1 / 0));
      var a = null;
      e != null &&
        (a = await o("WAWebSchemaMessage").getMessageTable().get(e.toString()));
      var i = a == null ? void 0 : t(a);
      return n === "before"
        ? [r, i != null ? i : 1 / 0]
        : [i != null ? i : r, 1 / 0];
    }
    function b(e) {
      var t;
      if (e.label != null)
        return Promise.resolve({
          messages: [],
          eof: !0,
          canceled: !1,
          status: 200,
        });
      var n = {
        remote: (t = e.remote) == null ? void 0 : t.toString(),
        page: e.page,
        limit: e.count,
      };
      return o("WAWebFtsClient").ftsClient.search(e.searchTerm, n);
    }
    function v(e) {
      var t = e.anchor,
        n = e.count;
      return S(n, t);
    }
    async function S(e, t) {
      var n = await C(t, function (e) {
          return e == null ? void 0 : e.isCallLogMsg;
        }),
        r = n[0],
        a = n[1],
        i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["isCallLogMsg"], r, a, {
            lowerInclusive: !1,
            upperInclusive: !0,
            reverse: !0,
            limit: e,
          });
      return E(i);
    }
    async function R() {
      var e = await o("WAWebSchemaMessage")
        .getMessageTable()
        .equals(
          ["callOutcome"],
          o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        );
      return E(e);
    }
    var L = 100;
    async function E(e) {
      var t = [],
        n = o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web");
      if (n)
        for (var a = 0; a < e.length; a++)
          (t.push(o("WAWebDBMessageSerialization").messageFromDbRow(e[a])),
            await r("WACommonTaskScheduler").yield());
      else
        for (
          var i = r("justknobx")._("3116") || L, l = 0;
          l < e.length;
          l += i
        ) {
          for (var s = Math.min(l + i, e.length), u = l; u < s; u++)
            t.push(o("WAWebDBMessageSerialization").messageFromDbRow(e[u]));
          s < e.length &&
            (await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        }
      return t;
    }
    function k() {
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
    async function I(e, t, n, r, a) {
      n === void 0 && (n = "before");
      var i = n === "before",
        l = await C(
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
        d = await o("WAWebSchemaMessage")
          .getMessageTable()
          .inAnyRange(
            ["typeFlag", "t"],
            a.map(function (e) {
              return c(e);
            }),
            { reverse: i, limit: e },
          );
      return d;
    }
    function T(e) {
      var t = e.anchor,
        n = e.chat,
        r = e.count,
        a = e.direction,
        i = e.mediaType;
      return i === "allMedia"
        ? D(r, t, a)
        : i === "allLinks"
          ? x(r, t, a)
          : i === "allDocs"
            ? $({ chat: n, count: r, direction: a, msgKey: t })
            : i === "url"
              ? n != null
                ? g(n, r, a, "hasLink", t).then(function (e) {
                    return e.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                      );
                    });
                  })
                : Promise.resolve([])
              : i === "document"
                ? n != null
                  ? g(n, r, a, "isDocMsg", t).then(function (e) {
                      return e.map(function (e) {
                        return o(
                          "WAWebDBMessageSerialization",
                        ).messageFromDbRow(e);
                      });
                    })
                  : Promise.resolve([])
                : Promise.all(
                    ["isMediaMsg", "isDocMsg", "hasLink", "isCarouselMsg"].map(
                      function (e) {
                        return n != null
                          ? g(n, r, a, e, t).then(function (e) {
                              return e.map(function (e) {
                                return o(
                                  "WAWebDBMessageSerialization",
                                ).messageFromDbRow(e);
                              });
                            })
                          : Promise.resolve([]);
                      },
                    ),
                  ).then(function (e) {
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
    async function D(e, t, n, r) {
      r === void 0 && (r = k());
      var a = await I(e, t, n, r, [
        o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG,
        o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG |
          o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK,
      ]);
      return a.map(function (e) {
        return o("WAWebDBMessageSerialization").messageFromDbRow(e);
      });
    }
    async function x(e, t, n, r) {
      var a,
        i = await I(e, t, n, r, [
          (a = o("WAWebMsgType")).MESSAGE_TYPE_FLAGS.HAS_LINK,
          a.MESSAGE_TYPE_FLAGS.MEDIA_MSG | a.MESSAGE_TYPE_FLAGS.HAS_LINK,
          a.MESSAGE_TYPE_FLAGS.DOC_MSG | a.MESSAGE_TYPE_FLAGS.HAS_LINK,
        ]);
      return i.map(function (e) {
        return o("WAWebDBMessageSerialization").messageFromDbRow(e);
      });
    }
    async function $(e) {
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
      var i = await I(n, a, r, void 0, [
        o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG,
        o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG |
          o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK,
      ]);
      return i.map(function (e) {
        return o("WAWebDBMessageSerialization").messageFromDbRow(e);
      });
    }
    function P(e) {
      var t = e.anchor,
        n = e.chat,
        r = e.count,
        a = o("WAWebModelStorageUtils").getStorage();
      return n != null &&
        a.doesLocalSchemaIncludeVersion(a.versions.version(152))
        ? o("WAWebDBGetEventMessagesForChat").getEventMessagesForChat(n, r, t)
        : N(r, t);
    }
    async function N(e, t) {
      var n = await C(t, function (e) {
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
    }
    async function M(e, t, n) {
      if ((t === void 0 && (t = c), !e.remote)) return Promise.resolve([]);
      var a = e.remote.toString(),
        i = void 0;
      if (e instanceof r("WAWebMsgKey")) {
        var l = await o("WAWebSchemaMessage")
          .getMessageTable()
          .equals(["id"], e.toString());
        if (l.length === 0)
          throw (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Anchor message ",
                  " does not exist in message table",
                ])),
              e.toString(),
            ),
            new d()
          );
        i = l[0];
      }
      var u, m, p;
      if (n != null)
        ((u = o("WAWebFetchMessagesInThread").beginningOfThread(n)),
          (m =
            i != null
              ? o("WAWebDBMessageUtils").craftInternalThreadId(
                  o("WAWebDBMessageUtils").getInChatMsgId(i.internalId || ""),
                  n,
                )
              : o("WAWebFetchMessagesInThread").endOfThread(n)),
          (p = ["internalThreadIDs"]));
      else if (
        ((u = o("WAWebDBMessageUtils").beginningOfChat(e.remote)),
        (m = o("WAWebDBMessageUtils").endOfChat(e.remote)),
        i)
      ) {
        var _ = o("WAWebDBMessageUtils").getInChatMsgId(i.internalId || "");
        m = o("WAWebDBMessageUtils").craftInternalId(a, _);
      }
      var f = { lowerInclusive: !0, upperInclusive: !1 },
        g = await o("WAWebDBMessageStoreUtils").queryChatVisibleMessageHelper({
          lowerBound: u,
          upperBound: m,
          options: babelHelpers.extends({}, f, { reverse: !0 }),
          count: t,
          index: p,
        });
      return g.reverse().map(function (e) {
        return o("WAWebDBMessageSerialization").messageFromDbRow(e);
      });
    }
    function w(e) {
      var t = e.anchor,
        n = e.count,
        a = n === void 0 ? c : n,
        i = e.threadId;
      if (t instanceof r("WAWebMsgKey")) {
        var l = t.remote.toString();
        return o("WAWebSchemaMessage")
          .getMessageTable()
          .equals(["id"], t.toString())
          .then(function (e) {
            if (e.length === 0)
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Anchor message ",
                      " does not exist in message table",
                    ])),
                  t.toString(),
                ),
                new d()
              );
            var n = e[0],
              r = o("WAWebDBMessageUtils").getInChatMsgId(n.internalId || ""),
              s,
              c,
              m;
            if (i != null)
              ((s = o("WAWebDBMessageUtils").craftInternalThreadId(r, i)),
                (c = o("WAWebFetchMessagesInThread").endOfThread(i)),
                (m = ["internalThreadIDs"]));
            else {
              var p = r + a;
              ((s = o("WAWebDBMessageUtils").craftInternalId(l, r)),
                (c = o("WAWebDBMessageUtils").craftInternalId(l, p)),
                (c = o("WAWebDBMessageUtils").endOfChat(t.remote)));
            }
            var _ = { lowerInclusive: !1, upperInclusive: !0 };
            return o("WAWebDBMessageStoreUtils")
              .queryChatVisibleMessageHelper({
                lowerBound: s,
                upperBound: c,
                options: _,
                count: a,
                index: m,
              })
              .then(function (e) {
                return e.map(function (e) {
                  return o("WAWebDBMessageSerialization").messageFromDbRow(e);
                });
              });
          });
      }
      return Promise.resolve([]);
    }
    ((l.msgFindBefore = m),
      (l.msgFindAfter = p),
      (l.msgFindByDirection = _),
      (l.queryVcard = f),
      (l.queryMessageType = g),
      (l.msgFindStarred = h),
      (l.msgFindSearch = b),
      (l.msgFindCallLog = v),
      (l.getVoipOngoingCallLogMessages = R),
      (l.getMediaAvailableMsgBoundary = k),
      (l.msgFindMedia = T),
      (l.getAllMediaMessages = D),
      (l.getAllLinksMessages = x),
      (l.getAllDocsMessages = $),
      (l.msgFindEvents = P));
  },
  98,
);
