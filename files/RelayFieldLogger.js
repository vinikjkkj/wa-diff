__d(
  "RelayFieldLogger",
  ["invariant", "FBLogger", "Random", "err", "fb-error", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "relay-required",
      u = "relay-resolver",
      c = "relay-error-handling",
      d = r("gkx")("13037"),
      m = r("gkx")("18885"),
      p = 0.01;
    function _(e) {
      if (e.shouldThrow === !0 || d === !1) return !1;
      switch (e.kind) {
        case "relay_resolver.error":
        case "relay_field_payload.error":
          return !e.handled;
        case "missing_expected_data.throw":
        case "missing_required_field.throw":
          return !e.handled;
        case "missing_required_field.log":
        case "missing_expected_data.log":
          return !1;
        default:
          (e.kind, s(0, 93051, e.kind));
      }
    }
    function f(e) {
      return e.shouldThrow && !e.handled;
    }
    var g = r("gkx")("10182");
    function h(e) {
      var t,
        n = e.error,
        r = n == null ? void 0 : n.message,
        o = n == null || (t = n.exception) == null ? void 0 : t.message;
      return y(r, o);
    }
    function y(e, t) {
      if (e == null && t == null) return "Unknown error";
      var n = "Relay field server error: ";
      return (
        t != null && g && (n += "\n[OriginalServerError]: " + t),
        e != null && (n += "\n[GraphQLServerError]: " + e),
        n
      );
    }
    function C(e, t) {
      return e === null
        ? t != null
          ? " (the server returned null with an error: " + t.message + ")"
          : " (the server returned null)"
        : "";
    }
    function b(e) {
      return e.kind + "-" + e.fieldPath + "-" + e.owner;
    }
    function v(e, t) {
      f(e) ||
        d === !1 ||
        (_(e) &&
          r("FBLogger")(c)
            .blameToPreviousFrame()
            .info(
              'This field would have thrown if @throwOnFieldError were attached to its operation: at "' +
                e.fieldPath +
                '" in "' +
                e.owner +
                '", Here is what would have thrown: ' +
                t,
            ));
    }
    function S() {
      var t = new Set();
      return function (o) {
        var n = b(o),
          a = t.has(n);
        switch ((a || t.add(n), o.kind)) {
          case "missing_required_field.log":
            if (!a) {
              var i,
                l = C(o.fieldValue, o.fieldError),
                s = r("FBLogger")(e)
                  .blameToPreviousFrame()
                  .addMetadata("RELAY", "OPERATION", o.owner)
                  .event(o.owner),
                d = (i = o.fieldError) == null ? void 0 : i.mids;
              (Array.isArray(d) &&
                d.forEach(function (e) {
                  s = s.addMetadata("OPES", "MID", e);
                }),
                s.mustfix(
                  'Encountered a missing `@required` field with action "LOG" at "%s" in "%s"%s',
                  o.fieldPath,
                  o.owner,
                  l,
                ));
            }
            break;
          case "missing_required_field.throw": {
            var _ = C(o.fieldValue, o.fieldError),
              y = [
                'Encountered a missing `@required` field with action "THROW" at "' +
                  o.fieldPath +
                  '" in "' +
                  o.owner +
                  '"' +
                  _,
              ],
              S = r("err").apply(void 0, y);
            if (
              ((S.is_js_error = !0),
              (S.taalOpcodes = S.taalOpcodes || []),
              S.taalOpcodes.push(r("fb-error").TAALOpcode.PREVIOUS_FRAME),
              (S.operation = o.owner),
              !a)
            ) {
              var R,
                L,
                E = r("FBLogger")(e)
                  .blameToPreviousFrame()
                  .addMetadata("RELAY", "OPERATION", o.owner)
                  .event(o.owner),
                k = (R = o.fieldError) == null ? void 0 : R.mids;
              (Array.isArray(k) &&
                k.forEach(function (e) {
                  E = E.addMetadata("OPES", "MID", e);
                }),
                (L = E).mustfix.apply(L, y));
            }
            if (!o.handled) throw S;
            break;
          }
          case "relay_resolver.error":
            a ||
              r("FBLogger")(u)
                .catching(o.error)
                .blameToPreviousFrame()
                .addMetadata("RELAY", "OPERATION", o.owner)
                .event(o.owner)
                .mustfix(
                  'A Relay Resolver errored at "%s" in "%s"',
                  o.fieldPath,
                  o.owner,
                );
            break;
          case "relay_field_payload.error": {
            var I = o.error;
            if (!a) {
              var T = h(o);
              if (f(o)) {
                var D = r("FBLogger")(c)
                  .catching(r("err")(T))
                  .addToCategoryKey(o.owner + "." + o.fieldPath);
                (Array.isArray(I.mids) &&
                  I.mids.forEach(function (e) {
                    D = D.addMetadata("OPES", "MID", e);
                  }),
                  D.addMetadata("RELAY", "OPERATION", o.owner).info(
                    'RelayFieldPayloadError: An unexpected error ocurred at "%s" in "%s"',
                    o.fieldPath,
                    o.owner,
                  ));
              } else v(o, T);
            }
            if (f(o)) {
              var x = g
                  ? h(o)
                  : "Relay: Unexpected response payload - check server logs for details.",
                $ = r("err")(x);
              throw (
                ($.taalOpcodes = $.taalOpcodes || []),
                $.taalOpcodes.push(r("fb-error").TAALOpcode.PREVIOUS_FRAME),
                ($.operation = o.owner),
                Array.isArray(I.mids) && ($.mids = I.mids),
                $
              );
            }
            break;
          }
          case "missing_expected_data.log":
            m &&
              !a &&
              r("Random").coinflip(p) &&
              r("FBLogger")(c)
                .blameToPreviousFrame()
                .addMetadata("RELAY", "OPERATION", o.owner)
                .warn(
                  'Relay: Missing expected data at "%s" in "%s"',
                  o.fieldPath,
                  o.owner,
                );
            break;
        }
      };
    }
    ((l.eventShouldLogWouldThrow = _), (l.create = S));
  },
  98,
);
