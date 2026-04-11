__d(
  "MakeHasteTranslations",
  [
    "BootloaderConfig",
    "BootloaderRetryTracker",
    "ExecutionEnvironment",
    "FBLogger",
    "MakeHasteTranslationsMap",
    "Promise",
    "TimeSlice",
    "err",
    "fb-error",
    "getErrorSafe",
    "getSameOriginTransport",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = {},
      p = new (r("BootloaderRetryTracker"))({
        retries:
          (e = r("BootloaderConfig").translationRetries) != null
            ? e
            : r("BootloaderConfig").jsRetries,
        abortNum:
          (s = r("BootloaderConfig").translationRetryAbortNum) != null
            ? s
            : r("BootloaderConfig").jsRetryAbortNum,
        abortTime:
          (u = r("BootloaderConfig").translationRetryAbortTime) != null
            ? u
            : r("BootloaderConfig").jsRetryAbortTime,
        abortCallback: function () {
          r("FBLogger")("binary_transparency").warn("Translations retry abort");
        },
      });
    function _(e) {
      var t = JSON.parse(e);
      if (
        t != null &&
        typeof t == "object" &&
        typeof t.translations == "object" &&
        Array.isArray(t.virtual_modules)
      )
        return t;
      throw r("err")("Invalid response shape");
    }
    function f(e) {
      return new (d || (d = n("Promise")))(function (t, n) {
        var o = r("TimeSlice").getGuardedContinuation(
            "MakeHasteTranslationsFetcher genSendRequest",
          ),
          a = r("getSameOriginTransport")();
        (a.open("GET", e, !0),
          (a.onreadystatechange = function (i) {
            a.readyState === 4 &&
              o(function () {
                r("fb-error").ErrorXFBDebug.addFromXHR(a);
                try {
                  if (a.status !== 200)
                    throw r("err")("Received non-200 response");
                  t(_(a.responseText));
                } catch (o) {
                  p.maybeScheduleRetry(
                    e,
                    function () {
                      return t(f(e));
                    },
                    function () {
                      return n(
                        r("err")(
                          "Error processing response. XHR Error: %s, XHR status: %s, Response Text: %s",
                          r("getErrorSafe")(o).toString(),
                          a.status,
                          a.responseText.length > 300
                            ? a.responseText.slice(0, 300) + "..."
                            : a.responseText,
                        ),
                      );
                    },
                  );
                }
              });
          }),
          a.send());
      });
    }
    var g = "data:application/json;base64";
    function h(e) {
      if (!e.includes(g)) throw r("err")("Invalid data uri mime type");
      var t = e.split(","),
        n = t[0],
        o = t[1];
      if (o == null) throw r("err")("Data uri contains no contents");
      return _(atob(o));
    }
    function y(e, a) {
      return !(c || (c = r("ExecutionEnvironment"))).isInBrowser ||
        m[e] === "inprogress" ||
        m[e] === "complete"
        ? (d || (d = n("Promise"))).resolve()
        : ((m[e] = "inprogress"),
          (a.includes(g) ? (d || (d = n("Promise"))).resolve(h(a)) : f(a))
            .then(function (n) {
              (o("MakeHasteTranslationsMap").setBatch(n.translations),
                n.virtual_modules.forEach(function (e) {
                  return t.define(e, {});
                }),
                (m[e] = "complete"));
            })
            .catch(function (t) {
              ((m[e] = "failed"),
                r("FBLogger")(
                  "binary_transparency",
                  "translation_download_error",
                )
                  .catching(t)
                  .warn(
                    "Unable to download and process translation map. Url: %s",
                    a,
                  ));
            }));
    }
    function C(e) {
      for (var t of Object.entries(e)) {
        var n = t[0],
          o = t[1];
        r("promiseDone")(y(n, o));
      }
    }
    ((l.genFetchAndProcessTranslations = y),
      (l.fetchTranslationsForEarlyFlush = C));
  },
  98,
);
