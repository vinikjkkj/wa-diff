__d(
  "RelayFieldLogger",
  ["invariant", "FBLogger", "err", "fb-error", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "relay-required",
      u = "relay-resolver",
      c = "relay-error-handling",
      d = r("gkx")("13037");
    function m(e) {
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
    function p(e) {
      return e.shouldThrow && !e.handled;
    }
    var _ = r("gkx")("10182");
    function f(e) {
      var t,
        n = e.error,
        r = n == null ? void 0 : n.message,
        o = n == null || (t = n.exception) == null ? void 0 : t.message;
      return g(r, o);
    }
    function g(e, t) {
      if (e == null && t == null) return "Unknown error";
      var n = "Relay field server error: ";
      return (
        t != null && _ && (n += "\n[OriginalServerError]: " + t),
        e != null && (n += "\n[GraphQLServerError]: " + e),
        n
      );
    }
    function h(e, t) {
      return e === null
        ? t != null
          ? " (the server returned null with an error: " + t.message + ")"
          : " (the server returned null)"
        : "";
    }
    function y(e) {
      return e.kind + "-" + e.fieldPath + "-" + e.owner;
    }
    function C(e, t) {
      p(e) ||
        d === !1 ||
        (m(e) &&
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
    function b() {
      var t = new Set();
      return function (o) {
        var n = y(o),
          a = t.has(n);
        switch ((a || t.add(n), o.kind)) {
          case "missing_required_field.log":
            if (!a) {
              var i,
                l = h(o.fieldValue, o.fieldError),
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
            var m = h(o.fieldValue, o.fieldError),
              g = [
                'Encountered a missing `@required` field with action "THROW" at "' +
                  o.fieldPath +
                  '" in "' +
                  o.owner +
                  '"' +
                  m,
              ],
              b = r("err").apply(void 0, g);
            if (
              ((b.is_js_error = !0),
              (b.taalOpcodes = b.taalOpcodes || []),
              b.taalOpcodes.push(r("fb-error").TAALOpcode.PREVIOUS_FRAME),
              (b.operation = o.owner),
              !a)
            ) {
              var v,
                S,
                R = r("FBLogger")(e)
                  .blameToPreviousFrame()
                  .addMetadata("RELAY", "OPERATION", o.owner)
                  .event(o.owner),
                L = (v = o.fieldError) == null ? void 0 : v.mids;
              (Array.isArray(L) &&
                L.forEach(function (e) {
                  R = R.addMetadata("OPES", "MID", e);
                }),
                (S = R).mustfix.apply(S, g));
            }
            if (!o.handled) throw b;
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
            var E = o.error;
            if (!a) {
              var k = f(o);
              if (p(o)) {
                var I = r("FBLogger")(c)
                  .catching(r("err")(k))
                  .addToCategoryKey(o.owner + "." + o.fieldPath);
                (Array.isArray(E.mids) &&
                  E.mids.forEach(function (e) {
                    I = I.addMetadata("OPES", "MID", e);
                  }),
                  I.addMetadata("RELAY", "OPERATION", o.owner).info(
                    'RelayFieldPayloadError: An unexpected error ocurred at "%s" in "%s"',
                    o.fieldPath,
                    o.owner,
                  ));
              } else C(o, k);
            }
            if (p(o)) {
              var T = _
                  ? f(o)
                  : "Relay: Unexpected response payload - check server logs for details.",
                D = r("err")(T);
              throw (
                (D.taalOpcodes = D.taalOpcodes || []),
                D.taalOpcodes.push(r("fb-error").TAALOpcode.PREVIOUS_FRAME),
                (D.operation = o.owner),
                Array.isArray(E.mids) && (D.mids = E.mids),
                D
              );
            }
            break;
          }
        }
      };
    }
    ((l.eventShouldLogWouldThrow = m), (l.create = b));
  },
  98,
);
