__d(
  "WAWebHatchCustomConnector",
  ["WAWebHatchCustomConnectorRequest", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!o("WAWebHatchJsonReaders").isObject(e)) return null;
      var t = s(e);
      return t === void 0 ? [] : Array.isArray(t) ? t.flatMap(u).sort(d) : null;
    }
    function s(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "connectors");
      if (t !== void 0) return t;
      var n = o("WAWebHatchJsonReaders").readObject(e, "result");
      return n == null
        ? void 0
        : o("WAWebHatchJsonReaders").readField(n, "connectors");
    }
    function u(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readString(e, "name");
      if (
        n == null ||
        !o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(n) ||
        o("WAWebHatchJsonReaders").readBool(e, "connected") !== !0
      )
        return [];
      var r = (
        (t = o("WAWebHatchJsonReaders").readArray(e, "hosts")) != null ? t : []
      ).filter(function (e) {
        return typeof e == "string";
      });
      return [{ displayName: c(n, r), hosts: r, name: n }];
    }
    function c(e, t) {
      var n = t
        .map(function (e) {
          return e.trim();
        })
        .find(function (e) {
          return e !== "";
        });
      return n != null
        ? n
        : e.slice(
            o("WAWebHatchCustomConnectorRequest")
              .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX.length,
          );
    }
    function d(e, t) {
      return (
        e.displayName.localeCompare(t.displayName, void 0, {
          sensitivity: "accent",
        }) || e.name.localeCompare(t.name)
      );
    }
    l.decodeHatchCustomConnectorList = e;
  },
  98,
);
