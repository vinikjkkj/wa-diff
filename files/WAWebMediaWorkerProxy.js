__d(
  "WAWebMediaWorkerProxy",
  ["WAWebABProps", "cr:36997"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      return n("cr:36997").calculateFilehashInWorker(e);
    }
    async function s(e, t, r) {
      return n("cr:36997").hmacSha256InWorker(e, t, r);
    }
    async function u(e) {
      return n("cr:36997").transcodeToMp4InWorker(e);
    }
    async function c(e) {
      return n("cr:36997").mp4RepairMuxInWorker(e);
    }
    async function d(e) {
      var t;
      return n("cr:36997").kaleidoscopeClassifyInWorker(
        babelHelpers.extends({}, e, {
          strictJpegScanValidationEnabled: (t =
            o("WAWebABProps")).getABPropConfigValue(
            "ks_jpeg_scan_strict_validation_enabled",
          ),
          strictOggOpusValidationEnabled: t.getABPropConfigValue(
            "ks_ogg_opus_strict_validation_enabled",
          ),
          strictMp4ValidationEnabled: t.getABPropConfigValue(
            "ks_mp4_strict_validation_enabled",
          ),
          zipArchiveCheckEnabled: t.getABPropConfigValue(
            "ks_zip_archive_check_enabled",
          ),
          allowAv1VideoCodec: t.getABPropConfigValue(
            "ks_allow_av1_video_codec",
          ),
          claimedTypeValidationEnabled: t.getABPropConfigValue(
            "ks_claimed_type_validation_enabled",
          ),
          strictAacAdtsValidationEnabled: t.getABPropConfigValue(
            "ks_aac_adts_strict_validation_enabled",
          ),
        }),
      );
    }
    function m(e) {
      if (e == null) return null;
      var t = {};
      return (
        e.iptc != null && (t.iptc = e.iptc),
        e.c2pa != null && (t.c2pa = e.c2pa),
        t.iptc == null && t.c2pa == null ? null : t
      );
    }
    async function p(e) {
      var t = await n("cr:36997").detectAiProvenanceInWorker(e),
        r = t.engineErrorCode,
        o = t.provenance,
        a = t.systemProvenance,
        i = t.transferredBuffer;
      return {
        transferredBuffer: i,
        provenance: m(o),
        engineErrorCode: r,
        systemProvenance: a,
      };
    }
    async function _(e) {
      return await n("cr:36997").writeMediaMetadataInWorker(e);
    }
    function f(e) {
      n("cr:36997").prewarmMediaWasmWorker(e);
    }
    ((l.calculateFilehashInWorker = e),
      (l.hmacSha256InWorker = s),
      (l.transcodeToMp4InWorker = u),
      (l.mp4RepairMuxInWorker = c),
      (l.kaleidoscopeClassifyInWorker = d),
      (l.detectAiProvenanceInWorker = p),
      (l.writeMediaMetadataInWorker = _),
      (l.prewarmMediaWasmWorker = f));
  },
  98,
);
