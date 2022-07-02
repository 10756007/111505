import torch
# flag = torch.cuda.is_available()
# if flag:
#     print("CUDA 可使用")
# else:
#     print("CUDA 不可用")
#
# npgu = 1
#
# device = torch.device("cuda:0" if (torch.cuda.is_available() and npgu > 0) else "cpu")
# print("驅動為: ", device)
# print("GPU: ", torch.cuda.get_device_name(0))

print(torch.cuda.is_available())