__d(
  "WAWebReportingTokenConfig",
  ["WAWebProtobufsReporting.pb", "decodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = atob(e),
          n = t.length,
          r = new Uint8Array(new ArrayBuffer(n)),
          o = 0;
        o < n;
        o++
      )
        r[o] = t.charCodeAt(o);
      return r;
    }
    var s =
        "CgQIARIACjQIAxIwKgQIAhIAKgQIAxIAKgQICBIAKgQICxIAKhAIERIMKgQIFRIAKgQIFhIAKgQIGRIACioIBBImCAIqBggBEgIIAioGCBASAggCKhIIERIOCAIqBAgVEgAqBAgWEgAKOggFEjYIAioGCAMSAggCKgYIBBICCAIqBggFEgIIAioGCBASAggCKhIIERIOCAIqBAgVEgAqBAgWEgAKIggGEh4qBAgBEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgeEgAKLggHEioqBAgCEgAqBAgHEgAqBAgKEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgUEgAKLggIEioqBAgCEgAqBAgHEgAqBAgJEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgVEgAKNAgJEjAqBAgCEgAqBAgGEgAqBAgHEgAqBAgNEgAqEAgREgwqBAgVEgAqBAgWEgAqBAgUEgAKKAgMEiQIAioGCAESAggCKgYIAhICCAIqCAgOEgQIAiABKgYIDxICCAIKKggSEiYIAioGCAYSAggCKgYIEBICCAIqEggREg4IAioECBUSACoECBYSAAouCBoSKioECAQSACoECAUSACoECAgSACoECA0SACoQCBESDCoECBUSACoECBYSAApCCBwSPggCKgYIARICCAIqBggCEgIIAioGCAQSAggCKgYIBRICCAIqBggGEgIIAioSCAcSDggCKgQIFRIAKgQIFhIACgwIJRIIKgYIARICIAEKUggxEk4IAioGCAISAggCKhYIAxISCAIqBggBEgIIAioGCAISAggCKhIIBRIOCAIqBAgVEgAqBAgWEgAqFggIEhIIAioGCAESAggCKgYIAhICCAIKDAg1EggqBggBEgIgAQoOCDcSCggCKgYIARICIAEKDgg6EgoIAioGCAESAiABCg4IOxIKCAIqBggBEgIgAQpSCDwSTggCKgYIAhICCAIqFggDEhIIAioGCAESAggCKgYIAhICCAIqEggFEg4IAioECBUSACoECBYSACoWCAgSEggCKgYIARICCAIqBggCEgIIAgpSCEASTggCKgYIAhICCAIqFggDEhIIAioGCAESAggCKgYIAhICCAIqEggFEg4IAioECBUSACoECBYSACoWCAgSEggCKgYIARICCAIqBggCEgIIAgo2CEISMggCKgQIAhIAKgQIBhIAKgQIBxIAKgQIDRIAKhAIERIMKgQIFRIAKgQIFhIAKgQIFBIACg4IShIKCAIqBggBEgIgAQoOCFcSCggCKgYIARICIAEKMghYEi4IAioGCAESAggCKg4IAhIKCAIqBggBEgIIAioSCAMSDggCKgQIFRIAKgQIFhIACg4IXBIKCAIqBggBEgIgAQoOCF0SCggCKgYIARICIAEKDgheEgoIAioGCAESAiAB",
      u = (function () {
        function e(e) {
          var t = e.fieldNumber,
            n = e.isMessage,
            r = n === void 0 ? !1 : n,
            o = e.subfields;
          ((this.fieldNumber = t), (this.isMessage = r), (this.subfields = o));
        }
        var t = e.prototype;
        return (
          (t.isExtractWholeField = function () {
            return (
              this.subfields == null || this.subfields.fieldsToFrank.size === 0
            );
          }),
          e
        );
      })(),
      c = (function () {
        function e(e) {
          var t = this;
          ((this.fieldsToFrank = new Map()),
            e == null ||
              e.forEach(function (e) {
                t.fieldsToFrank.set(e.fieldNumber, e);
              }));
        }
        var t = e.prototype;
        return (
          (t.getConfigForField = function (t) {
            return this.fieldsToFrank.get(t) || null;
          }),
          e
        );
      })();
    function d(e, t, n) {
      var r = n.minVersion,
        o = n.maxVersion,
        a = o === void 0 ? 1 / 0 : o,
        i = n.subfield,
        l = n.isMessage;
      if (e < r || e > a) return null;
      if (i == null) return new u({ fieldNumber: t, isMessage: l });
      var s = [];
      return (
        i.forEach(function (t, n) {
          var r = d(e, n, t);
          r != null && s.push(r);
        }),
        new u({ fieldNumber: t, isMessage: l, subfields: new c(s) })
      );
    }
    var m = new Map();
    function p(t) {
      var n,
        r = m.get(t);
      if (r != null) return r;
      var a = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsReporting.pb").ConfigSpec,
          e(s),
        ),
        i = [];
      (n = a.field) == null ||
        n.forEach(function (e, n) {
          var r = d(t, n, e);
          r != null && i.push(r);
        });
      var l = new c(i);
      return (m.set(t, l), l);
    }
    ((l.getBytesFromBase64 = e),
      (l.REPORTING_TOKEN_CONFIG_BASE64 = s),
      (l.FieldToExtract = u),
      (l.ReportingTokenConfig = c),
      (l.getReportingTokenConfig = p));
  },
  98,
);
