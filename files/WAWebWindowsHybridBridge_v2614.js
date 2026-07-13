__d(
  "WAWebWindowsHybridBridge.v2614",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2614",
    "WAWebWindowsHybridBridgeAbProps.v2614",
    "WAWebWindowsHybridBridgeAdv.v2614",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2614",
    "WAWebWindowsHybridBridgeConnection.v2614",
    "WAWebWindowsHybridBridgeContacts.v2614",
    "WAWebWindowsHybridBridgeDebugFeatures.v2614",
    "WAWebWindowsHybridBridgeLinksPreview.v2614",
    "WAWebWindowsHybridBridgeMediaFiles.v2614",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2614",
    "WAWebWindowsHybridBridgeNativeAppState.v2614",
    "WAWebWindowsHybridBridgePictures.v2614",
    "WAWebWindowsHybridBridgePreferences.v2614",
    "WAWebWindowsHybridBridgeRateTheApp.v2614",
    "WAWebWindowsHybridBridgeRingtone.v2614",
    "WAWebWindowsHybridBridgeScalingControl.v2614",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2614",
    "WAWebWindowsHybridBridgeSharesheet.v2614",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2614",
    "WAWebWindowsHybridBridgeTouchpadFix.v2614",
    "WAWebWindowsHybridBridgeVoip.v2614",
    "WAWebWindowsHybridBridgeWam.v2614",
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
            "WAWebWindowsHybridBridgeAbProps.v2614",
          ).WindowsHybridBridgeAbProps_v2614)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2614",
          ).WindowsHybridBridgeWam_v2614)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2614",
          ).WindowsHybridBridgePreferences_v2614)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2614",
          ).WindowsHybridBridgeScalingControl_v2614)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2614",
          ).WindowsHybridBridgePictures_v2614)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2614",
            ).WindowsHybridBridgeDebugFeatures_v2614)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2614",
          ).VoipWinRTBridge_v2614)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2614",
          ).WAWebWindowsHybridBridgeRateTheApp_v2614)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2614",
          ).WindowsHybridBridgeConnection_v2614)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2614",
          ).WindowsHybridBridgeTouchpadFix_v2614)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2614",
          ).WindowsHybridBridgeLinksPreview_v2614)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2614",
            ).WindowsHybridBridgeContacts_v2614)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2614",
            ).WindowsHybridBridgeContacts_v2614)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2614",
          ).WAWebWindowsHybridBridgeMediaFiles_v2614)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2614",
          ).WAWebWindowsHybridBridgeSharesheet_v2614)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2614",
          ).WindowsHybridAppActivationBridge_v2614)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2614",
          ).WindowsHybridBridgeNativeAppState_v2614)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2614",
          ).WindowsHybridBridgeSystemIntegrations_v2614)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2614",
          ).WindowsHybridBridgeBrowserExtensions_v2614)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2614",
          ).WindowsHybridBridgeSeamlessMigration_v2614)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2614",
          ).WindowsHybridBridgeMediaTranscoder_v2614)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2614",
          ).WindowsHybridBridgeAdv_v2614)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2614",
          ).WindowsHybridBridgeRingtone_v2614)(E)),
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
    l.WindowsHybridBridge_v2614 = e;
  },
  98,
);
