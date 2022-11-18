import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name} is viral!`,
      options: {
        body: restaurant.city,
        image: `${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}`,
      },
    });
  },
};
export default WebSocketInitiator;
