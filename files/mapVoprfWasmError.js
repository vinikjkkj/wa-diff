__d(
  "mapVoprfWasmError",
  ["XPlatReactVoprf.shared"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      switch (e) {
        case -1:
          return new u();
        case 1:
          return new c();
        case 2:
          return new d();
        case 3:
          return new m();
        case 4:
          return new p();
        default:
          return new _();
      }
    }
    var u = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "Unknown error encountered by VOPRF WASM"),
            (n = e.call(this, t) || this),
            (n.name = "VoprfUnknownError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((e = o("XPlatReactVoprf.shared")).VoprfWasmError),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 &&
              (t = "Incorrect buffer length encountered by VOPRF WASM"),
            (n = e.call(this, t) || this),
            (n.name = "VoprfBufferLengthError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.VoprfWasmError),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 &&
              (t = "Error while performing curve operation by VOPRF WASM"),
            (n = e.call(this, t) || this),
            (n.name = "VoprfCurveOperationError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.VoprfWasmError),
      m = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 &&
              (t = "Error while performing hash operation by VOPRF WASM"),
            (n = e.call(this, t) || this),
            (n.name = "VoprfHashOperationError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.VoprfWasmError),
      p = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 &&
              (t = "Error while performing proof operation by VOPRF WASM"),
            (n = e.call(this, t) || this),
            (n.name = "VoprfProofError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.VoprfWasmError),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 &&
              (t = "Unknown error code received from WASM binary"),
            (n = e.call(this, t) || this),
            (n.name = "UnknownErrorCode"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.VoprfWasmError);
    ((l.mapVoprfWasmError = s),
      (l.VoprfUnknownError = u),
      (l.VoprfBufferLengthError = c),
      (l.VoprfCurveOperationError = d),
      (l.VoprfHashOperationError = m),
      (l.VoprfProofError = p),
      (l.UnknownErrorCode = _));
  },
  98,
);
