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
    function h(e) {
      return e.kind + "-" + e.fieldPath + "-" + e.owner;
    }
    function y(e, t) {
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
    function C() {
      var t = new Set();
      return function (o) {
        var n = h(o),
          a = t.has(n);
        switch ((a || t.add(n), o.kind)) {
          case "missing_required_field.log":
            a ||
              r("FBLogger")(e)
                .blameToPreviousFrame()
                .addMetadata("RELAY", "OPERATION", o.owner)
                .event(o.owner)
                .mustfix(
                  'Encountered a missing `@required` field with action "LOG" at "%s" in "%s"',
                  o.fieldPath,
                  o.owner,
                );
            break;
          case "missing_required_field.throw": {
            var i = [
                'Encountered a missing `@required` field with action "THROW" at "' +
                  o.fieldPath +
                  '" in "' +
                  o.owner +
                  '"',
              ],
              l = r("err").apply(void 0, i);
            if (
              ((l.is_js_error = !0),
              (l.taalOpcodes = l.taalOpcodes || []),
              l.taalOpcodes.push(r("fb-error").TAALOpcode.PREVIOUS_FRAME),
              (l.operation = o.owner),
              !a)
            ) {
              var s;
              (s = r("FBLogger")(e)
                .blameToPreviousFrame()
                .addMetadata("RELAY", "OPERATION", o.owner)
                .event(o.owner)).mustfix.apply(s, i);
            }
            if (!o.handled) throw l;
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
            var d = o.error;
            if (!a) {
              var m = f(o);
              if (p(o)) {
                var g = r("FBLogger")(c)
                  .catching(r("err")(m))
                  .addToCategoryKey(o.owner + "." + o.fieldPath);
                (Array.isArray(d.mids) &&
                  d.mids.forEach(function (e) {
                    g = g.addMetadata("OPES", "MID", e);
                  }),
                  g
                    .addMetadata("RELAY", "OPERATION", o.owner)
                    .info(
                      'RelayFieldPayloadError: An unexpected error ocurred at "%s" in "%s"',
                      o.fieldPath,
                      o.owner,
                    ));
              } else y(o, m);
            }
            if (p(o)) {
              var C = _
                  ? f(o)
                  : "Relay: Unexpected response payload - check server logs for details.",
                b = r("err")(C);
              throw (
                (b.taalOpcodes = b.taalOpcodes || []),
                b.taalOpcodes.push(r("fb-error").TAALOpcode.PREVIOUS_FRAME),
                (b.operation = o.owner),
                Array.isArray(d.mids) && (b.mids = d.mids),
                b
              );
            }
            break;
          }
        }
      };
    }
    ((l.eventShouldLogWouldThrow = m), (l.create = C));
  },
  98,
);
