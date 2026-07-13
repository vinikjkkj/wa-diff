__d(
  "WAWebWindowsHybridBridge.v2602",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2602",
    "WAWebWindowsHybridBridgeAbProps.v2602",
    "WAWebWindowsHybridBridgeAdv.v2602",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2602",
    "WAWebWindowsHybridBridgeConnection.v2602",
    "WAWebWindowsHybridBridgeContacts.v2602",
    "WAWebWindowsHybridBridgeDebugFeatures.v2602",
    "WAWebWindowsHybridBridgeLinksPreview.v2602",
    "WAWebWindowsHybridBridgeMediaFiles.v2602",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2602",
    "WAWebWindowsHybridBridgeNativeAppState.v2602",
    "WAWebWindowsHybridBridgePictures.v2602",
    "WAWebWindowsHybridBridgePreferences.v2602",
    "WAWebWindowsHybridBridgeRateTheApp.v2602",
    "WAWebWindowsHybridBridgeScalingControl.v2602",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2602",
    "WAWebWindowsHybridBridgeSharesheet.v2602",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2602",
    "WAWebWindowsHybridBridgeTouchpadFix.v2602",
    "WAWebWindowsHybridBridgeVoip.v2602",
    "WAWebWindowsHybridBridgeWam.v2602",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2602",
          ).WindowsHybridBridgeAbProps_v2602)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2602",
          ).WindowsHybridBridgeWam_v2602)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2602",
          ).WindowsHybridBridgePreferences_v2602)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2602",
          ).WindowsHybridBridgeScalingControl_v2602)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2602",
          ).WindowsHybridBridgePictures_v2602)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2602",
            ).WindowsHybridBridgeDebugFeatures_v2602)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2602",
          ).VoipWinRTBridge_v2602)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2602",
          ).WAWebWindowsHybridBridgeRateTheApp_v2602)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2602",
          ).WindowsHybridBridgeConnection_v2602)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2602",
          ).WindowsHybridBridgeTouchpadFix_v2602)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2602",
          ).WindowsHybridBridgeLinksPreview_v2602)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2602",
            ).WindowsHybridBridgeContacts_v2602)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2602",
            ).WindowsHybridBridgeContacts_v2602)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2602",
          ).WAWebWindowsHybridBridgeMediaFiles_v2602)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2602",
          ).WAWebWindowsHybridBridgeSharesheet_v2602)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2602",
          ).WindowsHybridAppActivationBridge_v2602)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2602",
          ).WindowsHybridBridgeNativeAppState_v2602)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2602",
          ).WindowsHybridBridgeSystemIntegrations_v2602)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2602",
          ).WindowsHybridBridgeBrowserExtensions_v2602)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2602",
          ).WindowsHybridBridgeSeamlessMigration_v2602)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2602",
          ).WindowsHybridBridgeMediaTranscoder_v2602)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2602",
          ).WindowsHybridBridgeAdv_v2602)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2602 = e;
  },
  98,
);
