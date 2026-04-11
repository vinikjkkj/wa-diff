__d(
  "relay-runtime/util/handlePotentialSnapshotErrors",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      for (var r of t)
        e.relayFieldLogger(babelHelpers.extends({}, r, { uiContext: n }));
      for (var o of t)
        if (s(o))
          switch (o.kind) {
            case "relay_resolver.error":
              throw new Error(
                "Relay: Resolver error at path '" +
                  o.fieldPath +
                  "' in '" +
                  o.owner +
                  "'. Message: " +
                  o.error.message,
              );
            case "relay_field_payload.error":
              throw new Error(
                "Relay: Unexpected response payload - check server logs for details.",
              );
            case "missing_expected_data.throw":
              throw new Error(
                "Relay: Missing expected data at path '" +
                  o.fieldPath +
                  "' in '" +
                  o.owner +
                  "'.",
              );
            case "missing_required_field.throw":
              throw new Error(
                "Relay: Missing @required value at path '" +
                  o.fieldPath +
                  "' in '" +
                  o.owner +
                  "'.",
              );
            case "missing_required_field.log":
            case "missing_expected_data.log":
              break;
            default:
              (o.kind, l(0, 87030, o.kind));
          }
    }
    function s(e) {
      switch (e.kind) {
        case "relay_resolver.error":
        case "relay_field_payload.error":
          return e.shouldThrow && !e.handled;
        case "missing_expected_data.throw":
        case "missing_required_field.throw":
          return !e.handled;
        case "missing_required_field.log":
        case "missing_expected_data.log":
          return !1;
        default:
          throw (e.kind, new Error("Relay: Unexpected event kind"));
      }
    }
    function u(t, n, r) {
      n != null && e(t, n, r);
    }
    a.exports = { eventShouldThrow: s, handlePotentialSnapshotErrors: u };
  },
  null,
);
