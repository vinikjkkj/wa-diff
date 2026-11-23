__d(
  "MAWMpsMigrationProtobufCorrectnessChecker",
  [
    "MAWEBLSInWorkerSwitch",
    "MAWMpsMigrationProtobufCorrectnessCheckerArmadilloComparisons",
    "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
    "MAWProtobufDeserializers",
    "MessageBackupSupplementalKeyGenerator",
    "MpsErrors",
    "MpsTypes",
    "QPLFlow",
    "Random",
    "WAResultOrError",
    "WebMps",
    "cr:19391",
    "getErrorSafe",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps").mps().loadMessage(e)
        : t
            .runMps(
              {
                boundary: "load_message",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.loadMessage(n, e);
              },
            )
            .then(function (e) {
              return e.match({
                err: o("WAResultOrError").makeError,
                ok: o("WAResultOrError").makeResult,
              });
            });
    }
    async function s(t) {
      var n = r("justknobx")._("4597");
      if (!(o("Random").random() > 1 / n)) {
        var a = r("MAWEBLSInWorkerSwitch").get();
        if (a === !0) {
          var i = o("QPLFlow").startQPLFlow(r("qpl")._(521474116, "3249")),
            l,
            s = new Map();
          try {
            var c = await e({
              config: {
                persistToReverb: "no-persist",
                shouldFetchSupplementals: !0,
                shouldFetchTags: !1,
                strategy: "remote-only",
              },
              debug: { purpose: "mps-migration" },
              messageId: t.toplevelProtobuf.messageId,
              threadId: t.toplevelProtobuf.threadId,
            });
            if (!c.success) {
              (i.addPoint("mps_fetch_failed", {
                string: {
                  errorMessage: o("MpsErrors").MpsErrors.codeOf(c.error),
                },
              }),
                i.endSuccess());
              return;
            }
            if (c.value == null) {
              (i.addPoint("mps_fetch_message_not_found"), i.endSuccess());
              return;
            }
            l = c.value;
            for (var d of l.supplementalProtobufs.entries()) {
              var m = d[0],
                p = d[1];
              if (
                o(
                  "MessageBackupSupplementalKeyGenerator",
                ).isSupplementalProtobufAnEdit(m)
              ) {
                var _ = m.slice(0, m.length - 3).concat("000");
                s.set(o("MpsTypes").toSupplementalKey(_), p);
              } else s.set(o("MpsTypes").toSupplementalKey(m), p);
            }
          } catch (e) {
            var f = r("getErrorSafe")(e);
            (i.addPoint("mps_fetch_failed", {
              string: { errorMessage: f.message },
            }),
              i.endSuccess());
            return;
          }
          (i.addPoint("protobuf_comparison_start"),
            i.addPoint("protobuf_comparison_toplevel_start"));
          var g = u(t.toplevelProtobuf.payload, l.toplevelProtobuf.payload);
          if (!g.success) {
            i.endFail("top_level_protobuf_mismatch", {
              string: { mismatchType: g.error },
            });
            return;
          }
          (i.addPoint("protobuf_comparison_toplevel_end"),
            i.addPoint("protobuf_comparison_supplemental_start"));
          for (var h of t.supplementalsToInsert.entries()) {
            var y = h[0],
              C = h[1],
              b = s.get(y);
            if (b != null) {
              var v = u(C.payload, b.payload);
              if (!v.success) {
                i.endFail("supplemental_protobuf_mismatch", {
                  string: { mismatchType: v.error },
                });
                return;
              }
            }
          }
          (i.addPoint("protobuf_comparison_supplemental_end"), i.endSuccess());
        }
      }
    }
    function u(e, t) {
      var n, r;
      try {
        n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e);
      } catch (e) {
        return o("WAResultOrError").makeError(
          "backup_message_decoding_error_a",
        );
      }
      try {
        r = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(t);
      } catch (e) {
        return o("WAResultOrError").makeError(
          "backup_message_decoding_error_b",
        );
      }
      var a = c(n.proto.metadata, r.proto.metadata);
      if (!a.success) return o("WAResultOrError").makeError(a.error);
      var i = n.payload(),
        l = r.payload();
      return i.kind !== l.kind
        ? o("WAResultOrError").makeError(
            "payload_kind_mismatch_" + i.kind + "_vs_" + l.kind,
          )
        : i.kind === "messageApplication" && l.kind === "messageApplication"
          ? o(
              "MAWMpsMigrationProtobufCorrectnessCheckerArmadilloComparisons",
            ).compareMessageApplication(i, l)
          : o("WAResultOrError").makeError("unsupported_protobuf_type");
    }
    function c(e, t) {
      var n,
        r,
        a =
          e == null || (n = e.frankingMetadata) == null
            ? void 0
            : n.reportingTag,
        i =
          t == null || (r = t.frankingMetadata) == null
            ? void 0
            : r.reportingTag;
      return a != null &&
        i != null &&
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(a, i)
        ? o("WAResultOrError").makeError("reporting_tag_mismatch")
        : (e == null ? void 0 : e.messageId) !==
            (t == null ? void 0 : t.messageId)
          ? o("WAResultOrError").makeError("message_id_mismatch")
          : (e == null ? void 0 : e.senderId) !==
              (t == null ? void 0 : t.senderId)
            ? o("WAResultOrError").makeError("sender_id_mismatch")
            : o(
                  "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
                ).softCompareTimestamps(
                  e == null ? void 0 : e.timestampMs,
                  t == null ? void 0 : t.timestampMs,
                )
              ? o("WAResultOrError").makeResult()
              : o("WAResultOrError").makeError("timestamp_ms_mismatch");
    }
    ((l.compareBinary = o(
      "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
    ).compareBinary),
      (l.checkProtobufCorrectness = s),
      (l.compareProtobufs = u));
  },
  98,
);
