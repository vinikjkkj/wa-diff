__d(
  "WAWebKmpKotlinUtils",
  ["WALongInt", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("wa-kmp-syncd-engine-api").KtList.getInstance().fromJsArray(e);
    }
    function s(e) {
      var t = e.asJsReadonlyArrayView();
      return Array.from(t);
    }
    function u(e) {
      return o("wa-kmp-syncd-engine-api").KtMap.getInstance().fromJsMap(e);
    }
    function c(e, t, n) {
      var r = e.entries().map(function (e) {
        var r = e[0],
          o = e[1];
        return [t(r), n(o)];
      });
      return u(new Map(r));
    }
    function d(e) {
      var t = e.asJsReadonlyMapView();
      return new Map(Array.from(t.entries()));
    }
    function m(e) {
      return o("wa-kmp-syncd-engine-api").KtSet.getInstance().fromJsSet(e);
    }
    function p(e) {
      var t = e.asJsReadonlySetView();
      return new Set(Array.from(t.keys()));
    }
    function _(e) {
      return typeof e == "number"
        ? o("wa-kmp-syncd-engine-api").KmpLong.fromNumber(e)
        : o("wa-kmp-syncd-engine-api").KmpLong.fromDecimalString(e);
    }
    function f(e) {
      return o("WALongInt").decimalStringToLongInt(e.toDecimalString());
    }
    function g(e) {
      var t = f(e);
      return o("WALongInt").numberOrThrowIfTooLarge(t);
    }
    function h(e) {
      return new Uint8Array(e);
    }
    function y(e) {
      return new Int8Array(e);
    }
    function C(e) {
      return e instanceof ArrayBuffer
        ? new Int8Array(e)
        : e instanceof Int8Array
          ? e
          : new Int8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    ((l.asKtList = e),
      (l.asArray = s),
      (l.asKtMap = u),
      (l.asKtMapTransform = c),
      (l.asMap = d),
      (l.asKtSet = m),
      (l.asSet = p),
      (l.kmpLongFromLongInt = _),
      (l.longIntFromKmpLong = f),
      (l.numberFromKmpLong = g),
      (l.asUint8Array = h),
      (l.asInt8Array = y),
      (l.asKmpByteArray = C));
  },
  98,
);
