import mongoose, { Schema } from "mongoose";

//có thể không cần user Id nhưng hiện tại đang code cần User Id mới được
const SupportSchemal = mongoose.Schema(
    {
        user_ID:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        request_type:{
            type: String,
            required: true
        },
        request_content: {
            type: String,
            required: true
        },
        // 
        status:{
            type: String,
            required: true
        }
    }
)

const Support = mongoose.model("Supports", SupportSchemal)
export default Support

// Lý do cần request_type:
// Phân loại yêu cầu: Cho phép hệ thống phân loại các loại yêu cầu khác nhau, chẳng hạn như khiếu nại, yêu cầu kỹ thuật, vấn đề thanh toán, yêu cầu thông tin, v.v.
// Xử lý ưu tiên: Một số loại yêu cầu có thể được ưu tiên xử lý trước, ví dụ như các khiếu nại liên quan đến an toàn hoặc lỗi kỹ thuật nghiêm trọng.
// Phân công cho nhân viên phù hợp: Hệ thống có thể tự động phân công yêu cầu đến các nhóm nhân viên có chuyên môn phù hợp, chẳng hạn như nhóm kỹ thuật, nhóm chăm sóc khách hàng, hay nhóm tài chính.
// Thống kê và báo cáo: Dễ dàng tổng hợp và báo cáo về các loại yêu cầu khách hàng thường gặp, từ đó cải thiện dịch vụ.
// Ví dụ về request_type:
// Technical Issue (Vấn đề kỹ thuật): Các yêu cầu liên quan đến lỗi phần mềm, sự cố kết nối, hoặc các vấn đề kỹ thuật khác.
// Payment Issue (Vấn đề thanh toán): Các yêu cầu liên quan đến giao dịch thanh toán, hoàn tiền, hoặc lỗi thanh toán.
// Complaint (Khiếu nại): Các khiếu nại về dịch vụ, tài xế, hoặc trải nghiệm tổng thể.
// General Inquiry (Yêu cầu thông tin): Các câu hỏi chung về cách sử dụng ứng dụng, dịch vụ, hoặc thông tin liên quan.
// Account Issue (Vấn đề tài khoản): Các vấn đề liên quan đến việc đăng nhập, bảo mật tài khoản, hoặc thay đổi thông tin tài khoản.