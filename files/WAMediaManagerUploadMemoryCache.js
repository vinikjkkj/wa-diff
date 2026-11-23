__d(
  "WAMediaManagerUploadMemoryCache",
  [
    "Promise",
    "WAErrorMessage",
    "WAMediaManagerLogger",
    "WAPromiseDelays",
    "WAResultOrError",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["mediaKeyTimestamp", "objectId", "size"],
      s,
      u,
      c,
      d,
      m = 1728e5;
    function p(e) {
      var t = new Map();
      function r(e) {
        var n,
          r = e.cacheTtlMs,
          a = r === void 0 ? m : r,
          i = e.chatJid,
          l = e.plaintextHash,
          s = e.scheduledTask,
          u = (n = t.get(l)) != null ? n : new Map();
        (u.set(i, s),
          t.set(l, u),
          s
            .then(
              function (e) {
                var t = e.success;
                return t ? o("WAPromiseDelays").delayMs(a) : void 0;
              },
              function () {},
            )
            .then(function () {
              u.get(i) === s &&
                (u.delete(i), u.size === 0 && t.get(l) === u && t.delete(l));
            }));
      }
      return {
        clear: function () {
          t.clear();
        },
        getUploadedAttachment: function (n) {
          var e = t.get(n.plaintextHash);
          if (e == null)
            return { setUploadCache: r, type: "cache-miss-no-plaintext-hash" };
          var o = e.get(n.chatJid);
          return o == null
            ? { setUploadCache: r, type: "cache-miss-no-thread" }
            : { cache: o, type: "in-thread-cache-hit" };
        },
        saveDownloadedAttachment: function (a) {
          var t = a.mediaEntry,
            i = a.msgId,
            l = a.plaintextHash;
          e(i)
            .then(function (e) {
              if (e == null) {
                o("WAMediaManagerLogger").baseLogger.WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "missing chatJid, skip setDownloadedAttachmentToUploadCache",
                    ])),
                );
                return;
              }
              var a = _(t);
              if (a == null) {
                o("WAMediaManagerLogger").baseLogger.ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "can not covert mediaEntry from download to upload for cache",
                    ])),
                );
                return;
              }
              var i = o("WATimeUtils").timeoutFor(a.mediaKeyTimestamp, m / 1e3);
              i === 0 ||
                o("WATimeUtils").isInFuture(
                  o("WATimeUtils").pastUnixTime(
                    o("WATimeUtils").DAY_SECONDS,
                    a.mediaKeyTimestamp,
                  ),
                ) ||
                r({
                  cacheTtlMs: i,
                  chatJid: e.protocolMsgId.chat,
                  plaintextHash: l,
                  scheduledTask: (d || (d = n("Promise"))).resolve(
                    o("WAResultOrError").makeResult(a),
                  ),
                });
            })
            .catch(function (e) {
              o("WAMediaManagerLogger").baseLogger.WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "setDownloadedAttachmentToUploadCache getProtocolMsgIdAndSortOrderMs: ",
                    "",
                  ])),
                o("WAErrorMessage").maybeGetMessageFromError(e),
              );
            });
        },
      };
    }
    function _(t) {
      var n = t.mediaKeyTimestamp,
        r = t.objectId,
        o = t.size,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n == null || r == null || o == null
        ? null
        : babelHelpers.extends({}, a, {
            mediaKeyTimestamp: n,
            objectId: r,
            size: o,
          });
    }
    l.createUploadMemoryCache = p;
  },
  98,
);
