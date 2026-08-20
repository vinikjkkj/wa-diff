__d(
  "nextgendasherr",
  [
    "VideoPlayerNextgendashStateMachine",
    "fb-error",
    "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "nextgendashClock";
    function s(t, n, a) {
      for (
        var i = arguments.length, l = new Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        l[s - 3] = arguments[s];
      var u = r("fb-error").err.apply(
        r("fb-error"),
        [
          a != null
            ? a
            : l.length > 0
              ? l
                  .map(function () {
                    return "%s";
                  })
                  .join(" ")
              : "",
        ].concat(l),
      );
      ((u.name = n), (u.project = "comet_video_player_nextgendash"));
      var c = new (r("fb-error").ErrorMetadata)();
      (C(t, c), (u.metadata = c));
      var d = "Error: ";
      return (
        (u.stack = u.stack.replace(/^[^\n]+/, d)),
        r("fb-error").TAAL.blameToPreviousFrame(u),
        (u[e] = t.host.clock()),
        o("VideoPlayerNextgendashStateMachine").skipAutoDisposeInsideThisObject(
          u,
        )
      );
    }
    function u(e, t) {
      return (
        (e === "" || t.startsWith(e + "/") ? "" : e + "/") +
        (e.startsWith("VideoPlayerNextgendash")
          ? t.replace(/VideoPlayerNextgendash/g, "")
          : t)
      );
    }
    function c(t, n, o, a) {
      var i = void 0,
        l = void 0,
        c = "",
        d = [],
        m = [];
      try {
        var p,
          _ = typeof n == "object" && n != null ? n : null;
        ((l = _ != null && typeof _.code == "number" ? _.code : void 0),
          (m =
            _ != null && typeof _.stack == "string"
              ? _.stack.split("\n").slice(1)
              : []),
          (i =
            _ != null && typeof _.name == "string" && _.name !== ""
              ? _.name
              : void 0));
        var f = r("fb-error").getErrorSafe(n);
        if (
          ((c = (p = f.messageFormat) != null ? p : f.message),
          (d =
            f.messageFormat != null && Array.isArray(f.messageParams)
              ? f.messageParams
              : []),
          i != null &&
            m.length > 0 &&
            ["TypeError", "ReferenceError", "RangeError"].includes(i))
        ) {
          var g = m.slice(0, 2).map(function (e) {
            return e.trim();
          });
          ((c += " - stack: %s"), (d = d.concat([g.join("\n")])));
        }
      } catch (e) {}
      i == null &&
        (l != null ? (i = "NotAnErrorWithCode") : (i = "NotAnError"));
      for (
        var h = u(o, i + (l != null ? "#" + l : "")),
          y = arguments.length,
          C = new Array(y > 4 ? y - 4 : 0),
          b = 4;
        b < y;
        b++
      )
        C[b - 4] = arguments[b];
      var v = s.apply(
        void 0,
        [
          t,
          h,
          (a != null ? a : "") +
            (a != null && a !== "" && c !== "" ? " / " : "") +
            c,
        ].concat((a != null ? C : []).concat(c != null ? d : [])),
      );
      return (
        typeof n == "object" &&
          n != null &&
          typeof n[e] == "object" &&
          n[e] != null &&
          typeof n[e].unixMs == "number" &&
          typeof n[e].perfMs == "number" &&
          (v[e] = n[e]),
        m.length > 0 &&
          (v.stack += "\n    at <cause_stack_below>\n" + m.join("\n")),
        r("fb-error").TAAL.blameToPreviousFrame(v),
        v
      );
    }
    function d(t, n, o, a) {
      for (
        var i = n
            .filter(Boolean)
            .map(function (e) {
              var n = e[0],
                r = e[1];
              return [n, c(t, r, "")];
            })
            .sort(function (e, t) {
              return (
                e[1].nextgendashClock.perfMs - t[1].nextgendashClock.perfMs
              );
            }),
          l = arguments.length,
          d = new Array(l > 4 ? l - 4 : 0),
          m = 4;
        m < l;
        m++
      )
        d[m - 4] = arguments[m];
      if (i.length <= 0)
        return s.apply(
          void 0,
          [t, o, "No causes." + (a != null ? " :: " + a : "")].concat(
            a != null ? d : [],
          ),
        );
      var p = i.map(function (e, t) {
          var n = e[0],
            r = e[1];
          return [
            t + 1 + ">" + n + ">" + r.name + ": " + r.messageFormat,
            r.messageParams,
          ];
        }),
        _ = p
          .map(function (e) {
            var t = e[0];
            return t;
          })
          .join(" ++ "),
        f = p.reduce(function (e, t) {
          var n = t[1];
          return e.concat(n);
        }, []),
        g = i[0],
        h = u(o, g[0] + ">" + g[1].name),
        y = s.apply(
          void 0,
          [
            t,
            h,
            p.length + " causes: " + _ + (a != null ? " :: " + a : ""),
          ].concat(f, a != null ? d : []),
        );
      return (
        (y[e] = g[1].nextgendashClock),
        r("fb-error").TAAL.blameToPreviousFrame(y),
        y
      );
    }
    function m(e, t, n, o) {
      for (
        var a = arguments.length, i = new Array(a > 4 ? a - 4 : 0), l = 4;
        l < a;
        l++
      )
        i[l - 4] = arguments[l];
      var u =
        typeof t == "object" &&
        t != null &&
        t.name === "TypeError" &&
        typeof t.message == "string"
          ? s.apply(
              void 0,
              [
                e,
                n,
                o != null && o !== ""
                  ? o + " / " + t.name + ": " + t.message
                  : t.name + ": " + t.message,
              ].concat(i),
            )
          : c.apply(void 0, [e, t, n, o].concat(i));
      return (r("fb-error").TAAL.blameToPreviousFrame(u), u);
    }
    function p(e) {
      return typeof e == "object" &&
        e != null &&
        "name" in e &&
        typeof e.name == "string" &&
        "message" in e &&
        typeof e.message == "string" &&
        "messageFormat" in e &&
        typeof e.messageFormat == "string" &&
        "messageParams" in e &&
        Array.isArray(e.messageParams) &&
        "project" in e &&
        e.project === "comet_video_player_nextgendash" &&
        "metadata" in e &&
        e.metadata instanceof r("fb-error").ErrorMetadata
        ? e
        : null;
    }
    function _(e) {
      return {
        messageFormat: e.messageFormat,
        messageParams: e.messageParams,
        metadataSnapshot: e.metadata.getAll(),
        name: e.name,
        nextgendashClock: e.nextgendashClock,
        project: e.project,
      };
    }
    function f(t) {
      var n = r("fb-error").err.apply(
        r("fb-error"),
        [t.messageFormat].concat(t.messageParams),
      );
      ((n.name = t.name), (n.project = "comet_video_player_nextgendash"));
      var o = new (r("fb-error").ErrorMetadata)();
      return (
        o.addEntries.apply(o, t.metadataSnapshot),
        (n.metadata = o),
        (n[e] = t.nextgendashClock),
        n
      );
    }
    function g(e) {
      var t,
        n =
          typeof e == "object" && e != null && typeof e.code == "number"
            ? e.code
            : void 0,
        o =
          typeof e == "object" && e != null && typeof e.message == "string"
            ? e.message
            : void 0,
        a =
          (t = {
            "": "MEDIA_ERR_UNKNOWN",
            1: "MEDIA_ERR_ABORTED",
            2: "MEDIA_ERR_NETWORK",
            3: "MEDIA_ERR_DECODE",
            4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
          }[String(n != null ? n : "")]) != null
            ? t
            : "MEDIA_ERR_UNKNOWN",
        i =
          o != null
            ? r("getMoreGranularErrorNameFromHTMLVideoElementErrorMessage")(o)
            : null,
        l =
          "VideoPlayerNextgendashMediaError/" +
          a +
          (n != null ? "#" + n : "") +
          (i != null ? "/" + i : "");
      return [l, o];
    }
    function h(e, t, n) {
      for (
        var o = g(t),
          a = o[0],
          i = o[1],
          l = arguments.length,
          u = new Array(l > 3 ? l - 3 : 0),
          c = 3;
        c < l;
        c++
      )
        u[c - 3] = arguments[c];
      var d = s.apply(
        void 0,
        [
          e,
          a,
          (n != null ? n : "MediaError") + (i != null ? ": %s" : ""),
        ].concat(u.concat(i != null ? [i] : [])),
      );
      return (r("fb-error").TAAL.blameToPreviousFrame(d), d);
    }
    function y(e) {
      var t = new (r("fb-error").ErrorMetadata)();
      C(e, t);
      var n = r("fb-error").FBLogger("comet_video_player_nextgendash");
      return (
        t.getAll().forEach(function (e) {
          n = n.addMetadata(e[0], e[1], e[2]);
        }),
        n
      );
    }
    function C(e, t) {
      var n = e.loggingState.metadata;
      ("videoFBID" in n &&
        n.videoFBID != null &&
        t.addEntry("COMET_VIDEO", "VIDEO_ID", n.videoFBID),
        t.addEntry(
          "COMET_VIDEO",
          "VIDEO_IMPLEMENTATION_DEBUG_DATA",
          JSON.stringify({ nextgendash_metadata: n }),
        ));
    }
    function b(e) {
      return e
        .replace(
          /(?:[0-9a-f]+[a-f][0-9][0-9a-f]*)|(?:[0-9a-f]*[0-9][a-f][0-9a-f]+)|(?:[0-9]+[a-f]+)|(?:[a-f]+[0-9]+)/g,
          "{NHEX}",
        )
        .replace(/[0-9]+,[0-9]+(?:,[0-9]+)*/g, "{NLIST}")
        .replace(
          /(HTTP(?:(?:0)|(?:[1-9][0-9]{1,5}))(?:[^0-9]|\b))|(#[0-9]+)|([0-9]+)/g,
          function (e, t, n) {
            return t || n ? e : "{N}";
          },
        );
    }
    ((l.nextgendasherr = s),
      (l.nextgendasherrFromCause = c),
      (l.nextgendasherrFromMultipleCauses = d),
      (l.nextgendasherrFromFetchRejection = m),
      (l.nextgendasherrFromNextgendasherr = p),
      (l.nextgendasherrToSnapshot = _),
      (l.nextgendasherrFromSnapshot = f),
      (l.nextgendasherrNameAndMessageFromMediaError = g),
      (l.nextgendasherrFromMediaError = h),
      (l.nextgendasherrFBLogger = y),
      (l.reduceCardinalityOfNextgendashErrorName = b));
  },
  98,
);
