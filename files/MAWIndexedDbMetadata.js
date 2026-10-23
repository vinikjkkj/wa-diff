__d(
  "MAWIndexedDbMetadata",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "v1",
      l = "v1",
      s = "v1",
      u = "v1",
      c = "v1",
      d = "v1",
      m = "v11",
      p = "v1",
      _ = "messenger_web_" + e,
      f = "messenger_web_v3",
      g = "messenger_web_encryption_" + l,
      h = "messenger_web_signal_" + s,
      y = "messenger_web_signal_v3",
      C = "messenger_web_log_" + u,
      b = "messenger_web_ebdb_" + d,
      v = "messenger_web_eb_minos_db_" + m,
      S = "messenger_web_fts_" + c,
      R = "wmi_rate_limit_" + p;
    function L(e) {
      return _ + "_" + e;
    }
    function E(e) {
      return S + "_" + e;
    }
    function k(e) {
      return f + "_" + e;
    }
    function I(e) {
      return g + "_" + e;
    }
    function T(e) {
      return h + "_" + e;
    }
    function D(e) {
      return y + "_" + e;
    }
    function x(e) {
      return "reverb_v1_" + e;
    }
    function $(e) {
      return "wmi_media_service_v1_" + e;
    }
    function P(e) {
      return "media_storage_v2_" + e;
    }
    function N(e) {
      return "maw_attachment_cdn_urls_v1_" + e;
    }
    function M(e) {
      return "messenger_web_metadata_v1_" + e;
    }
    function w(e) {
      return "persisted_queue_" + e + "_v1";
    }
    function A(e) {
      return "worm_persisted_queue_" + e + "_v1";
    }
    function F(e) {
      return "db_maintenance_" + e + "_v1";
    }
    function O(e) {
      return C + "_" + e;
    }
    function B(e) {
      return b + "_" + e;
    }
    function W(e) {
      return v + "_" + e;
    }
    function q(e) {
      return "cache_service_" + e + "_v3";
    }
    function U(e) {
      return "debug_info_v1_" + e;
    }
    function V(e) {
      return "recovery_code_v1_" + e;
    }
    function H(e) {
      return R + "_" + e;
    }
    ((i.dbName = L),
      (i.ftsDbName = E),
      (i.restoreDbName2 = k),
      (i.encryptionDbName = I),
      (i.jobsDbName = T),
      (i.signalWorm = D),
      (i.webReverDbbName = x),
      (i.wmiMediaServiceName = $),
      (i.mediaStorageCacheName = P),
      (i.mawAttachmentCdnUrlDbName = N),
      (i.wmiMetadataDbName = M),
      (i.persistedQueueDbName = w),
      (i.wormPersistedQueueDbName = A),
      (i.wormMaintenanceDbName = F),
      (i.logDbName = O),
      (i.ebdbName = B),
      (i.ebMinosDbName = W),
      (i.MAWcacheServiceDbName = q),
      (i.MAWDebugInfoDBName = U),
      (i.ebRecoveryCodeDBName = V),
      (i.wmiRateLimitDbName = H));
  },
  66,
);
