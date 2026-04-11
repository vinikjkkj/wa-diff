__d(
  "DGWConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = 3e4,
      s = "prod",
      u = 128,
      c = (e = n("$InternalEnum"))({
        NORMAL_CLOSURE: 1e3,
        GOING_AWAY: 1001,
        ABNORMAL_CLOSURE: 1006,
        SERVER_INTERNAL_ERROR: 1011,
        GRACEFUL_CLOSE: 4e3,
        KEEPALIVE_TIMEOUT: 4001,
        DGW_SERVER_ERROR: 4002,
        UNAUTHORIZED: 4003,
        REJECTED: 4004,
        BAD_REQUEST: 4005,
      }),
      d = e({
        DrainReason_ELB: 0,
        DrainReason_SLB: 1,
        DrainReason_AppServerPush: 2,
        DrainReason_GracePeriodExpired: 3,
        DrainReason_Unknown: 4,
      });
    function m(e) {
      switch (e) {
        case d.DrainReason_ELB:
          return "DrainReason_ELB";
        case d.DrainReason_SLB:
          return "DrainReason_SLB";
        case d.DrainReason_AppServerPush:
          return "DrainReason_AppServerPush";
        case d.DrainReason_GracePeriodExpired:
          return "DrainReason_GracePeriodExpired";
        case d.DrainReason_Unknown:
          return "DrainReason_Unknown";
      }
    }
    var p = e({
      DGWVER_GENESIS: 0,
      DGWVER_PREFIXED_APP_HEADERS: 1,
      DGWVER_HANDLES_DGW_DRAIN_FRAME: 2,
      DGWVER_HANDLES_DGW_DEAUTH_FRAME: 3,
      DGWVER_HANDLES_STREAMGROUPS: 4,
      DGWVER_BIG_IDS: 5,
    });
    function _(e) {
      switch (e) {
        case p.DGWVER_GENESIS:
          return "DGWVER_GENESIS";
        case p.DGWVER_PREFIXED_APP_HEADERS:
          return "DGWVER_PREFIXED_APP_HEADERS";
        case p.DGWVER_HANDLES_DGW_DRAIN_FRAME:
          return "DGWVER_HANDLES_DGW_DRAIN_FRAME";
        case p.DGWVER_HANDLES_DGW_DEAUTH_FRAME:
          return "DGWVER_HANDLES_DGW_DEAUTH_FRAME";
        case p.DGWVER_HANDLES_STREAMGROUPS:
          return "DGWVER_HANDLES_STREAMGROUPS";
        case p.DGWVER_BIG_IDS:
          return "DGWVER_BIG_IDS";
      }
    }
    var f = e({
      DgwCodecReturnCode_Success: 0,
      DgwCodecReturnCode_Failure: 1,
      DgwCodecReturnCode_NotEnoughData: 2,
      DgwCodecReturnCode_OutOfMemory: 3,
      DgwCodecReturnCode_AckIdOutOfBounds: 4,
      DgwCodecReturnCode_InvalidParameter: 5,
      DgwCodecReturnCode_InvalidFrameType: 6,
      DgwCodecReturnCode_InvalidAckFrameLength: 7,
      DgwCodecReturnCode_InvalidDrainReason: 8,
      DgwCodecReturnCode_InvalidDataFrameLength: 9,
      DgwCodecReturnCode_InvalidDrainFrameLength: 10,
    });
    function g(e) {
      switch (e) {
        case f.DgwCodecReturnCode_Success:
          return "DgwCodecReturnCode_Success";
        case f.DgwCodecReturnCode_Failure:
          return "DgwCodecReturnCode_Failure";
        case f.DgwCodecReturnCode_NotEnoughData:
          return "DgwCodecReturnCode_NotEnoughData";
        case f.DgwCodecReturnCode_OutOfMemory:
          return "DgwCodecReturnCode_OutOfMemory";
        case f.DgwCodecReturnCode_AckIdOutOfBounds:
          return "DgwCodecReturnCode_AckIdOutOfBounds";
        case f.DgwCodecReturnCode_InvalidParameter:
          return "DgwCodecReturnCode_InvalidParameter";
        case f.DgwCodecReturnCode_InvalidFrameType:
          return "DgwCodecReturnCode_InvalidFrameType";
        case f.DgwCodecReturnCode_InvalidAckFrameLength:
          return "DgwCodecReturnCode_InvalidAckFrameLength";
        case f.DgwCodecReturnCode_InvalidDrainReason:
          return "DgwCodecReturnCode_InvalidDrainReason";
        case f.DgwCodecReturnCode_InvalidDataFrameLength:
          return "DgwCodecReturnCode_InvalidDataFrameLength";
        case f.DgwCodecReturnCode_InvalidDrainFrameLength:
          return "DgwCodecReturnCode_InvalidDrainFrameLength";
      }
    }
    var h = e({
      DgwFrameType_Empty: 2,
      DgwFrameType_Drain: 3,
      DgwFrameType_Deauth: 4,
      DgwFrameType_StreamGroup_DeprecatedEstabStream: 5,
      DgwFrameType_StreamGroup_DeprecatedData: 6,
      DgwFrameType_StreamGroup_SmallAck: 7,
      DgwFrameType_StreamGroup_DeprecatedEndOfData: 8,
      DgwFrameType_Ping: 9,
      DgwFrameType_Pong: 10,
      DgwFrameType_StreamGroup_Ack: 12,
      DgwFrameType_StreamGroup_Data: 13,
      DgwFrameType_StreamGroup_EndOfData: 14,
      DgwFrameType_StreamGroup_EstabStream: 15,
    });
    function y(e) {
      switch (e) {
        case h.DgwFrameType_Empty:
          return "DgwFrameType_Empty";
        case h.DgwFrameType_Drain:
          return "DgwFrameType_Drain";
        case h.DgwFrameType_Deauth:
          return "DgwFrameType_Deauth";
        case h.DgwFrameType_StreamGroup_DeprecatedEstabStream:
          return "DgwFrameType_StreamGroup_DeprecatedEstabStream";
        case h.DgwFrameType_StreamGroup_DeprecatedData:
          return "DgwFrameType_StreamGroup_DeprecatedData";
        case h.DgwFrameType_StreamGroup_SmallAck:
          return "DgwFrameType_StreamGroup_SmallAck";
        case h.DgwFrameType_StreamGroup_DeprecatedEndOfData:
          return "DgwFrameType_StreamGroup_DeprecatedEndOfData";
        case h.DgwFrameType_Ping:
          return "DgwFrameType_Ping";
        case h.DgwFrameType_Pong:
          return "DgwFrameType_Pong";
        case h.DgwFrameType_StreamGroup_Ack:
          return "DgwFrameType_StreamGroup_Ack";
        case h.DgwFrameType_StreamGroup_Data:
          return "DgwFrameType_StreamGroup_Data";
        case h.DgwFrameType_StreamGroup_EndOfData:
          return "DgwFrameType_StreamGroup_EndOfData";
        case h.DgwFrameType_StreamGroup_EstabStream:
          return "DgwFrameType_StreamGroup_EstabStream";
      }
    }
    var C = {
      HEADER_APPID: "x-dgw-appid",
      HEADER_APPVERSION: "x-dgw-appversion",
      HEADER_AUTHTYPE: "x-dgw-authtype",
      HEADER_AUTHTOKEN: "Authorization",
      HEADER_DEVICE_ID: "x-dgw-deviceid",
      HEADER_DGW_VERSION: "x-dgw-version",
      HEADER_LOGGING_ID: "x-dgw-loggingid",
      HEADER_REGIONHINT: "x-dgw-regionhint",
      HEADER_TARGET_TIER: "x-dgw-tier",
      HEADER_UUID: "x-dgw-uuid",
      HEADER_ESTABLISH_STREAM_FRAME_BASE64:
        "x-dgw-establish-stream-frame-base64",
      HEADER_STREAM_TRACE_ID: "x-dgw-streamtraceid",
      kShadowHeader: "x-dgw-shadow",
      APPHEADER_PREFIX: "x-dgw-app-",
      TRAFFIC_TRACING: "_nc_e2e",
    };
    ((i.DEFAULT_ACK_TIMEOUT_MS = l),
      (i.DEFAULT_SERVICE_TIER = s),
      (i.MAX_ACK_ID = u),
      (i.WebsocketCloseCodes = c),
      (i.DrainReason = d),
      (i.drainReasonToDrainReasonString = m),
      (i.DgwVersion = p),
      (i.dgwVersionToString = _),
      (i.DgwCodecReturnCode = f),
      (i.DgwCodecReturnCodeToString = g),
      (i.DgwFrameType = h),
      (i.frameTypeToString = y),
      (i.HEADER_CONSTANTS = C));
  },
  66,
);
