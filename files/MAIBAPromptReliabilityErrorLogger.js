__d(
  "MAIBAPromptReliabilityErrorLogger",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "MAIBAPromptReliabilityCounters",
    "Random",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 10,
      c = 6e4,
      d = 0.01,
      m = 0,
      p = null;
    function _(t, n, a) {
      try {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return;
        var i = (s || (s = r("performanceNow")))();
        if (m >= u || (p != null && i - p < c)) {
          o("MAIBAPromptReliabilityCounters").bumpMAIBAPromptReliabilityCounter(
            t,
            "page",
            "diagnostics_dropped_by_limit",
          );
          return;
        }
        if (r("Random").random() >= d) return;
        (m++, (p = i));
        var l =
            a != null && typeof a == "object" && "name" in a ? a.name : null,
          _ =
            l === "Error"
              ? "Error"
              : l === "TypeError"
                ? "TypeError"
                : l === "RangeError"
                  ? "RangeError"
                  : l === "ReferenceError"
                    ? "ReferenceError"
                    : l === "SyntaxError"
                      ? "SyntaxError"
                      : l === "NetworkTimeoutError"
                        ? "NetworkTimeoutError"
                        : l === "GraphQLNetworkError"
                          ? "GraphQLNetworkError"
                          : "unknown",
          f =
            a != null && typeof a == "object" && "stack" in a ? a.stack : null,
          g =
            a != null && typeof a == "object" && "message" in a
              ? a.message
              : null,
          h = "";
        if (
          typeof f == "string" &&
          typeof g == "string" &&
          g.length <= 8192 &&
          l === _
        ) {
          var y = g === "" ? _ : _ + ": " + g;
          f.startsWith(y) && (h = f.slice(y.length, y.length + 8192));
        }
        var C = [];
        if (h !== "")
          for (var b of h.split("\n").slice(0, 24)) {
            var v = b.match(
              /^\s*at (?:[^()\n]* \()?https:\/\/static\.[a-z0-9.-]+\.fbcdn\.net\/rsrc\.php\/[^\s?#()]*\/([A-Za-z0-9_-]{6,64}\.js)(?:\?[^\s()]*)?:(\d{1,8}):(\d{1,8})\)?$/,
            );
            if (
              v != null &&
              (C.push(v[1] + ":" + v[2] + ":" + v[3]), C.length === 8)
            )
              break;
          }
        r("FBLogger")("maiba_prompt_reliability", "error").warn(
          "Prompt reliability failure: surface=%s stage=%s kind=%s bundle_frames=%s",
          t,
          n,
          _,
          C.join(";"),
        );
      } catch (e) {}
    }
    l.logMAIBAPromptReliabilityError = _;
  },
  98,
);
