__d(
  "WAWebWindowsHybridBridge.v2615",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2615",
    "WAWebWindowsHybridBridgeAbProps.v2615",
    "WAWebWindowsHybridBridgeAdv.v2615",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2615",
    "WAWebWindowsHybridBridgeConnection.v2615",
    "WAWebWindowsHybridBridgeContacts.v2615",
    "WAWebWindowsHybridBridgeDebugFeatures.v2615",
    "WAWebWindowsHybridBridgeLinksPreview.v2615",
    "WAWebWindowsHybridBridgeMediaFiles.v2615",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2615",
    "WAWebWindowsHybridBridgeNativeAppState.v2615",
    "WAWebWindowsHybridBridgePictures.v2615",
    "WAWebWindowsHybridBridgePreferences.v2615",
    "WAWebWindowsHybridBridgeRateTheApp.v2615",
    "WAWebWindowsHybridBridgeRingtone.v2615",
    "WAWebWindowsHybridBridgeScalingControl.v2615",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2615",
    "WAWebWindowsHybridBridgeSharesheet.v2615",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2615",
    "WAWebWindowsHybridBridgeTouchpadFix.v2615",
    "WAWebWindowsHybridBridgeVoip.v2615",
    "WAWebWindowsHybridBridgeWam.v2615",
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
            "WAWebWindowsHybridBridgeAbProps.v2615",
          ).WindowsHybridBridgeAbProps_v2615)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2615",
          ).WindowsHybridBridgeWam_v2615)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2615",
          ).WindowsHybridBridgePreferences_v2615)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2615",
          ).WindowsHybridBridgeScalingControl_v2615)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2615",
          ).WindowsHybridBridgePictures_v2615)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2615",
            ).WindowsHybridBridgeDebugFeatures_v2615)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2615",
          ).VoipWinRTBridge_v2615)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2615",
          ).WAWebWindowsHybridBridgeRateTheApp_v2615)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2615",
          ).WindowsHybridBridgeConnection_v2615)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2615",
          ).WindowsHybridBridgeTouchpadFix_v2615)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2615",
          ).WindowsHybridBridgeLinksPreview_v2615)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2615",
            ).WindowsHybridBridgeContacts_v2615)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2615",
            ).WindowsHybridBridgeContacts_v2615)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2615",
          ).WAWebWindowsHybridBridgeMediaFiles_v2615)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2615",
          ).WAWebWindowsHybridBridgeSharesheet_v2615)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2615",
          ).WindowsHybridAppActivationBridge_v2615)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2615",
          ).WindowsHybridBridgeNativeAppState_v2615)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2615",
          ).WindowsHybridBridgeSystemIntegrations_v2615)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2615",
          ).WindowsHybridBridgeBrowserExtensions_v2615)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2615",
          ).WindowsHybridBridgeSeamlessMigration_v2615)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2615",
          ).WindowsHybridBridgeMediaTranscoder_v2615)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2615",
          ).WindowsHybridBridgeAdv_v2615)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2615",
          ).WindowsHybridBridgeRingtone_v2615)(E)),
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
    l.WindowsHybridBridge_v2615 = e;
  },
  98,
);
