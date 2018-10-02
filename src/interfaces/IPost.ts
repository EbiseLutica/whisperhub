import ReactionViewModel from "@/interfaces/ReactionViewModel";
import IMedia from "@/interfaces/IMedia";

export default interface IPost {
	name: string;
	id: string;
	host?: string;
	isAdmin: boolean;
	isTopicOwner: boolean;
	isMyPost: boolean;
	message: string;
	reactions: ReactionViewModel[];
	isStarred: boolean;
	timestamp: string;
	reply?: IPost;
	replyId?: string;
	mediasId?: string[];
	medias?: IMedia[];
}
