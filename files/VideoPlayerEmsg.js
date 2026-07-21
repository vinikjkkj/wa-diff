__d(
  "VideoPlayerEmsg",
  [
    "DataViewReader",
    "ErrorMetadata",
    "ErrorSerializer",
    "FBLogger",
    "Mp4DASHEventMessageBox",
    "Mp4Demuxer",
    "err",
    "getErrorSafe",
    "refine",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("refine")).custom(function (e) {
        return typeof e == "number" ||
          (typeof e == "string" && /^[0-9]+$/.test(e))
          ? e
          : void 0;
      }),
      u = e.object({
        rosterData: e.object({
          activeSpeaker: e.nullable(s),
          speakerInfoList: e.array(e.object({ audioMuted: e.bool(), id: s })),
        }),
      }),
      c = e.object({
        imf: e.object({
          pluginEventData: e.mixed(),
          pluginEventType: e.string(),
        }),
      });
    function d(e, t, n) {
      try {
        return o("refine").jsonParserEnforced(e)(t);
      } catch (e) {
        if (r("tryParseJSONMixed")(t) == null)
          throw r("err")(
            'Failed to parse emsg payload as JSON for scheme "%s"',
            n,
          );
        var a = r("getErrorSafe")(e);
        throw r("err")(
          'Unsupported emsg payload format for scheme "%s": %s',
          n,
          a.message,
        );
      }
    }
    var m = {
      LIVE_HUDDLE_SCHEME_ID: "urn:fb:metadata",
      LIVE_HUDDLE_ZLIB_SCHEME_ID: "urn:fb:metadata:deflate",
      LIVE_INSTREAM_ADS_SCHEME_ID: "urn:fb:ads_meta",
      LIVE_INTERACTIVE_PLUGIN_EVENT_ID: "urn:fb:interactive_plugin",
      LIVE_STICKER_SCHEME_ID: "urn:fb:lvstickr",
    };
    function p(e, t) {
      for (
        var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        o[a - 2] = arguments[a];
      var i = r("err").apply(void 0, [t].concat(o));
      return ((i.errorName = i.name = e), i);
    }
    function _(e) {
      var t = e.emsgDataStr,
        n = e.emsgDurationInSec,
        o = e.emsgId,
        a = e.emsgScheme,
        i = e.emsgStartTimeInSec,
        l = e.representationID,
        s = e.videoID,
        _ = null,
        f = null;
      try {
        if (a == null)
          throw p("CometVideoPlayerEmsgMissingScheme", "Missing emsg scheme");
        if (a === "")
          throw p("CometVideoPlayerEmsgEmptyScheme", "Empty emsg scheme");
        if (a.startsWith("livedash:trace:")) return [null, null];
        if (i == null)
          throw p(
            "CometVideoPlayerEmsgMissingStartTime",
            'Missing start time in emsg "%s"',
            String(a),
          );
        switch (a) {
          case m.LIVE_HUDDLE_SCHEME_ID: {
            var g = d(u, t, a);
            _ = {
              data: g,
              emsgDataStr: t,
              emsgDurationInSec: n,
              emsgId: o,
              emsgScheme: a,
              emsgStartTimeInSec: i,
              representationID: l,
              type: "emsg_huddle",
            };
            break;
          }
          case m.LIVE_HUDDLE_ZLIB_SCHEME_ID: {
            _ = null;
            break;
          }
          case m.LIVE_INSTREAM_ADS_SCHEME_ID: {
            _ = {
              emsgDataStr: t,
              emsgDurationInSec: n,
              emsgId: o,
              emsgScheme: a,
              emsgStartTimeInSec: i,
              representationID: l,
              type: "emsg_instream_ads",
            };
            break;
          }
          case m.LIVE_INTERACTIVE_PLUGIN_EVENT_ID: {
            var h = d(c, t, a);
            _ = {
              data: h.imf,
              emsgDataStr: t,
              emsgDurationInSec: n,
              emsgId: o,
              emsgScheme: a,
              emsgStartTimeInSec: i,
              representationID: l,
              type: "imf_interactive_plugin_event",
            };
            break;
          }
          case m.LIVE_STICKER_SCHEME_ID: {
            _ = {
              emsgDataStr: t,
              emsgDurationInSec: n,
              emsgId: o,
              emsgScheme: a,
              emsgStartTimeInSec: i,
              representationID: l,
              type: "imf_live_sticker",
            };
            break;
          }
          default: {
            var y,
              C = /^urn:fb:(.+)$/.exec(a);
            if (C == null)
              throw p(
                "CometVideoPlayerEmsgUnknownScheme",
                'Unknown scheme in emsg "%s"',
                String(a),
              );
            var b = (y = C[1]) != null ? y : "";
            _ = {
              emsgDataStr: t,
              emsgDurationInSec: n,
              emsgId: o,
              emsgScheme: a,
              emsgSchemeIMFTopic: b,
              emsgStartTimeInSec: i,
              representationID: l,
              type: "imf_other",
            };
            break;
          }
        }
      } catch (t) {
        f = r("getErrorSafe")(t);
        var v = f.metadata || new (r("ErrorMetadata"))();
        (s != null && v.addEntry("COMET_VIDEO", "VIDEO_ID", s),
          v.addEntry(
            "COMET_VIDEO",
            "VIDEO_IMPLEMENTATION_DEBUG_DATA",
            JSON.stringify(e),
          ),
          (f.metadata = v));
      }
      return [_, f];
    }
    function f(e, t, n) {
      var o,
        a,
        i = e.getMessageData(),
        l = new (r("DataViewReader"))(i).readZeroTerminatedString(i.byteLength),
        s = e.getEmsgFields();
      return {
        emsgDataStr: l,
        emsgDurationInSec: (o = e.getDuration()) != null ? o : void 0,
        emsgId: s == null ? void 0 : s.id,
        emsgScheme: s == null ? void 0 : s.schemeIdUri,
        emsgStartTimeInSec: (a = e.getStartTime()) != null ? a : void 0,
        representationID: n,
        videoID: t,
      };
    }
    function g(e, t, n) {
      C(t, e, n);
      var r = _(e),
        o = r[0],
        a = r[1];
      return (b(t, e, a, n), o);
    }
    function h(e, t, n, o, a) {
      for (
        var i = [], l = new (r("Mp4Demuxer"))(new DataView(e));
        !l.atEnd();
      ) {
        var s = l.parseBox();
        if (s.getType() === r("Mp4DASHEventMessageBox").canonicalType) {
          var u = l.parseCanonicalBox(
            r("Mp4DASHEventMessageBox"),
            l.parseFullBox(s),
          );
          if (u instanceof r("Mp4DASHEventMessageBox")) {
            var c = f(u, t, n),
              d = g(c, o, a);
            d != null && i.push(d);
          }
        }
        l.skipBox(s);
      }
      return i;
    }
    function y(e, t) {
      return {
        debug_reason: null,
        error_user_info: JSON.stringify({
          emsgDataStr: t.emsgDataStr,
          emsgDurationInSec: t.emsgDurationInSec,
          emsgId: t.emsgId,
          emsgScheme: t.emsgScheme,
          emsgStartTimeInSec: t.emsgStartTimeInSec,
        }),
        imf_emsg_id: t.emsgId != null ? String(t.emsgId) : null,
        imf_topic: t.emsgScheme,
        offset_ms:
          t.emsgStartTimeInSec == null
            ? null
            : e * 1e3 - t.emsgStartTimeInSec * 1e3,
        representation_id: t.representationID,
      };
    }
    function C(e, t, n) {
      t.emsgScheme != null &&
        ![m.LIVE_HUDDLE_SCHEME_ID, m.LIVE_HUDDLE_ZLIB_SCHEME_ID].includes(
          t.emsgScheme,
        ) &&
        (n == null ||
          n(
            babelHelpers.extends({}, y(e, t), {
              imf_event_type: "IMF_DOWNLOAD",
            }),
          ));
    }
    function b(e, t, n, o) {
      if (n != null) {
        var a,
          i,
          l = n.errorName != null && n.errorName !== "" ? n.errorName : n.name,
          s = n.messageFormat != null ? n.messageFormat : n.message,
          u = (
            n.messageFormat != null
              ? (a = n.messageParams) != null
                ? a
                : []
              : []
          ).slice(),
          c = "CometVideoPlayerEmsgParseFailed",
          d =
            c +
            ":" +
            (n.errorName != null && n.errorName !== "" ? n.errorName : n.name),
          p = r("ErrorSerializer").toReadableMessage(
            r("err").apply(void 0, [s].concat(u)),
          );
        ((i = r("FBLogger")("comet_video_player").catching(n)).warn.apply(
          i,
          ["CometVideoPlayerEmsgParseFailed:" + l + ": " + s].concat(u),
        ),
          o == null ||
            o(
              babelHelpers.extends({}, y(e, t), {
                error: d,
                error_code: "0",
                error_description: p,
                error_domain: c,
                error_type: "GenericParseError",
                imf_event_type: "IMF_JSON_PARSE_FAILURE",
              }),
            ));
      } else if (
        t.emsgScheme == null ||
        ![
          m.LIVE_HUDDLE_SCHEME_ID,
          m.LIVE_HUDDLE_ZLIB_SCHEME_ID,
          m.LIVE_INSTREAM_ADS_SCHEME_ID,
          m.LIVE_STICKER_SCHEME_ID,
          m.LIVE_INTERACTIVE_PLUGIN_EVENT_ID,
        ].includes(t.emsgScheme)
      ) {
        var _,
          f = "CometVideoPlayerEmsgInvalidScheme",
          g = "" + f;
        o == null ||
          o(
            babelHelpers.extends({}, y(e, t), {
              error: g,
              error_code: "0",
              error_description: (_ = t.emsgScheme) != null ? _ : "",
              error_domain: f,
              error_type: "GenericParseError",
              imf_event_type: "INVALID_TOPIC",
            }),
          );
      }
    }
    ((l.KnownEmsgSchemes = m),
      (l.parseEmsgBoxFromDetails = _),
      (l.extractEmsgBoxDetails = f),
      (l.parseEmsgBoxFromDetailsWithLogging = g),
      (l.parseEmsgBoxesFromMP4Segment = h));
  },
  98,
);
